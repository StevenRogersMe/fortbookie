import React from 'react';
// UI
import Select from 'components/select';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const regions = [
  { value: 'all', label: 'All' },
  { value: 'nae', label: 'NAE' },
  { value: 'naw', label: 'NAW' },
  { value: 'eu', label: 'EU' },
  { value: 'br', label: 'BR' },
  { value: 'oce', label: 'OCE' },
  { value: 'live', label: 'LIVE' },
];

const EventsFilters = ({ selectedRegion, setSelectedRegion }) => {
  const handleRegionChange = ({ value }) => setSelectedRegion(value);

  return (
    <div className="event-filters">
      <div className="event-filters__wrap">
        <div className="event-filters__item">
          <Typography component="span" variant="h6" className="event-filters__item-title">Region</Typography>
          <div className="event-filters__item-select">
            <Select
              defaultValue={regions[0]}
              options={regions}
              value={regions.find(({ value }) => value === selectedRegion)}
              onChange={handleRegionChange}
            />
          </div>
        </div>
        <div className="event-filters__item">
          <Typography component="span" variant="h6" className="event-filters__item-title">Event</Typography>
          <div className="event-filters__item-select">
            <Select
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
          <Typography component="span" variant="h6" className="event-filters__item-title">Bet type</Typography>
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
