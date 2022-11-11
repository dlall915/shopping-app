import React from 'react';
import Category from './Category';

export default function Categories({ categories, items, updateCategories, updateItems, showItemInfo }) {

  const toggleShow = (id) => {
    const modifiedCategories = categories.map((category) => (category.id === id
      ? { ...category, show: !category.show } : { ...category }));

    updateCategories(modifiedCategories);
  }

  return (
    <>
      {
        categories.map((category, index) =>
          items.find(item => item.categoryId === category.id) ? // Only render a category if there's an item under that category
            <Category key={index} category={category} items={items} toggleShow={toggleShow} updateItems={updateItems} showItemInfo={showItemInfo} />
            :
            null
        ) 
      }
    </>
  );
}
