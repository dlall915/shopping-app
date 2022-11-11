import React from 'react';

export default function Item({ item, decreaseQuantity, increaseQuantity, showItemInfo }) {

  return (
    <div className='item'>
      <span className='item-desc' onClick={() => showItemInfo(item)}>{item.quantity} {item.name}</span>
      <button onClick={() => decreaseQuantity(item.name)}>-</button>
      <button onClick={() => increaseQuantity(item.name)}>+</button>
    </div>
  );
}
