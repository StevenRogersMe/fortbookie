import React from 'react';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const List = ({ header, items, handleSelect, selected }) => {
  const classnames = classNames({
    'list': true,
  });

  const isActive = currentId => selected.some(({ id }) => id === currentId);

  return (
    <div className={classnames}>
      <Typography component="h6" className="list__header">{header}</Typography>
      <div className="list__items">
        {items.map(({ id, game, price }) => (
          <div key={id} className={`list__item ${isActive(id) ? 'is-active' : ''}`} onClick={() => { handleSelect(id) }}>
            <Typography component="span" variant="p-sm" className="text-medium list__item-game">{game}</Typography>
            <Typography component="span" variant="h6">{price}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
