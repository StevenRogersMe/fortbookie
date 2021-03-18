import React from 'react';
// Styles
import './styles.sass';

const List = ({ header, items, handleSelect, selected }) => {

  const isActive = currentId => selected.some(({ id }) => id === currentId);

  return (
    <div className="list">
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
