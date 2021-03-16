import React from 'react';
// UI
import Layout from 'modules/layout';
import EventsFilters from 'modules/events-filters';
import Accordion from 'components/accordion';
import List from 'components/list';
// Styles
import './styles.sass';
import { data } from './data';

const EventsPage = () => {
  const [selectedBets, setSelectedBets] = React.useState([]);

  const handleSelectBet = (id) => {
    setSelectedBets(selected => {
      let newArray;
      if (selectedBets.indexOf(id) === -1) {
        newArray = [...selected, id];
      } else {
        newArray = selected.filter(item => item !== id);
      }
      return newArray
    })
  };

  return (
    <div className="events-page">
      <Layout>
        <div className="events-page__filters">
          <EventsFilters />
        </div>
        <div className="events-page__preview">
          <div className="events-page__list">
            {data.map(({ id, title, date, time, games }, idx) => (
              <Accordion expanded={idx === 0} className="events-page__list-item" key={id}>
                <Accordion.Tab title={title} date={date} time={time} />
                <Accordion.Content>
                  <List header="Winner" items={games} handleSelect={handleSelectBet} selected={selectedBets} />
                </Accordion.Content>
              </Accordion>
            ))}
          </div>
          <div className="events-page__bets">
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EventsPage;
