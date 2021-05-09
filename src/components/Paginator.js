import React, { useState } from 'react';
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap';

function Paginator({itemsPerPage, totalItems, paginate, setItemsPerPage, currentPage }) {

  const [buttonTitle, setButtonTitle] = useState("Books per page");

  const pageNumbers = [];

  let i;
  for (i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setNewItemsPP = (num) => {
    setItemsPerPage(num);
    setButtonTitle(num.toString())
  }

  return (
          <Pagination size="sm" className="ms-md-3 mb-0 justify-content-center">
            <DropdownButton id="dropdown-button" title={buttonTitle}>

              { (buttonTitle !== "Books per page") && <Dropdown.Header>Books per page</Dropdown.Header> }
              
              <Dropdown.Item href="#/action-1" onClick={() => setNewItemsPP(5)}>5</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => setNewItemsPP(10)}>10</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => setNewItemsPP(15)}>15</Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={() => setNewItemsPP(20)}>20</Dropdown.Item>
            </DropdownButton>

            {pageNumbers.map(number => (
              <Pagination.Item key={number} active={number === currentPage} className='page-link' onClick={() => paginate(number)}>
                  {number}
              </Pagination.Item>
            ))}  
          </Pagination>
  );
};

export default Paginator;