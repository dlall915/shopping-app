import React from 'react';
import Item from './Item';

export default function Items({ category, items, updateItems, showItemInfo }) {

  const decreaseQuantity = (name) =>  {
    const modifiedItems = items.map((item) => (item.name === name
      ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : { ...item }));

    updateItems(modifiedItems);
  };

  const increaseQuantity = (name) =>  {
    const modifiedItems = items.map((item) => (item.name === name
      ? { ...item, quantity: item.quantity + 1 } : { ...item }));

    updateItems(modifiedItems);
  };  

  return (
    <>
      {
        items.filter((item) => item.categoryId === category.id).map((item, index) => 
          <Item key={index} item={item} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} showItemInfo={showItemInfo} />
        )
      }
    </>
  );
}
