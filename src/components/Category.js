import React from 'react';
import { MDBCollapse } from 'mdb-react-ui-kit';
import Items from './Items';

export default function Category({ category, items, toggleShow, updateItems, showItemInfo }) {

  return (
    <div>
      <h2 style={{color: `${category.color}`}} onClick={() => toggleShow(category.id)}>
        {category.name} {category.show ? '🞃' : '🞁'}
      </h2>
      <MDBCollapse show={category.show}>
          <Items
            category={category}
            items={items}
            updateItems={updateItems}
            showItemInfo={showItemInfo}
          />
      </MDBCollapse>
    </div>
  );
}
