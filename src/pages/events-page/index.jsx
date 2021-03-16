import React from 'react';
// UI
import Layout from 'modules/layout';
import EventsFilters from 'modules/events-filters';
// Styles
import './styles.sass';

const EventsPage = () => {
  return (
    <div className="events-page">
      <Layout>
        <div className="events-page__filters">
          <EventsFilters />
        </div>
      </Layout>
    </div >
  );
};

export default EventsPage;
