import React from 'react';
// UI
import Select from 'components/select';
// Styles
import './styles.sass';

const EventsFilters = () => {
  return (
    <div className="event-filters">
      <div className="event-filters__wrap">
        <div className="event-filters__item">
          <div className="event-filters__item-title">Region</div>
          <div className="event-filters__item-select">
            <Select
              defaultValue={{ label: "All", value: 'All' }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'NAE', label: 'NAE' },
                { value: 'NAW', label: 'NAW' },
                { value: 'EU', label: 'EU' },
                { value: 'BR', label: 'BR' },
                { value: 'OCE', label: 'OCE' },
              ]}
            />
          </div>
        </div>
        <div className="event-filters__item">
          <div className="event-filters__item-title">Sports</div>
          <div className="event-filters__item-select">
            <Select
              defaultValue={{ label: "All", value: 'All' }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'football', label: 'Football' },
                { value: 'hockey', label: 'Hockey' },
                { value: 'baseball', label: 'Baseball' },
                { value: 'cricket', label: 'Cricket' },
              ]}
            />
          </div>
        </div>
        <div className="event-filters__item">
          <div className="event-filters__item-title">Event</div>
          <div className="event-filters__item-select">
            <Select
              defaultValue={{ label: "All", value: 'All' }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'event 1', label: 'Event 1' },
                { value: 'event 2', label: 'Event 2' },
                { value: 'event 3', label: 'Event 3' },
                { value: 'event 4', label: 'Event 4' },
                { value: 'event 5', label: 'Event 5' },
              ]}
            />
          </div>
        </div>
        <div className="event-filters__item">
          <div className="event-filters__item-title">Bet type</div>
          <div className="event-filters__item-select">
            <Select
              defaultValue={{ label: "All", value: 'All' }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'type 1', label: 'Type 1' },
                { value: 'type 2', label: 'Type 2' },
                { value: 'type 3', label: 'Type 3' },
                { value: 'type 4', label: 'Type 4' },
                { value: 'type 5', label: 'Type 5' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFilters;
