import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function ItemInfo({displayedItem, categories, items, showItemModal, toggleShowItemModal, updateItems}) {

  const changeItemCategory = (name, category) => {
    const modifiedItems = items.map((item) => (item.name === name
      ? { ...item, categoryId: category.id } : { ...item }));

    updateItems(modifiedItems);
  }

  return (
    <MDBModal show={showItemModal} setShow={toggleShowItemModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>

          <MDBModalHeader>
            <MDBModalTitle>{displayedItem ? displayedItem.name : ''}</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={() => toggleShowItemModal(false)} />
          </MDBModalHeader>

          <MDBModalBody>
            <MDBDropdown>
              <MDBDropdownToggle>Change Category</MDBDropdownToggle>
              <MDBDropdownMenu>
                {
                  categories.map((category => <MDBDropdownItem link key={category.id} onClick={() => changeItemCategory(displayedItem.name, category)}>{category.name}</MDBDropdownItem>))
                }
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={() => toggleShowItemModal(false)}>
              Close
            </MDBBtn>
          </MDBModalFooter>

        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}