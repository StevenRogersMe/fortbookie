import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const List = ({ header, items, handleSelect, selected, alt }) => {
  const classnames = classNames({
    'list': true,
    'list--alt': alt,
  });

  const isActive = currentId => selected.some(({ id }) => id === currentId);

  return (
    <div className={classnames}>
      <div className="list__header">
        {header}
      </div>
      <div className="list__items">
        {items.map(({ id, game, price }) => (
          <div key={id} className={`list__item ${isActive(id) ? 'is-active' : ''}`} onClick={() => { handleSelect(id) }}>
            <div className="list__item-game">{game}</div>
            <div className="list__item-price">{price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
