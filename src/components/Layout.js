import React, { useState } from 'react';
import data from '../data/data.json';
import Categories from './Categories';
import ItemInfo from './ItemInfo';

function Layout() {
  const [categories, updateCategories] = useState(data.categories);
  const [items, updateItems] = useState(data.items);

  // Modal
  const [showItemModal, updateShowItemModal] = useState(false);
  const [itemToBeDisplayed, updateItemToBeDisplayed] = useState();

  const showItemInfo = (item) => {
    updateItemToBeDisplayed(item);
    updateShowItemModal(true);
  };

  return (
    <div> 
      <Categories 
        categories={categories}
        items={items}
        updateCategories={updateCategories}
        updateItems={updateItems}
        showItemInfo={showItemInfo}
      />
      <ItemInfo
        displayedItem={itemToBeDisplayed}
        categories={categories}
        items={items}
        showItemModal={showItemModal}
        toggleShowItemModal={updateShowItemModal}
        updateItems={updateItems}
      />
    </div>
  );
}

export default Layout;
