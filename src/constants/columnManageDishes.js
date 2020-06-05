import React from 'react';

export default [
    {
      Header: 'DISHES',
      accessor: 'dishes',
      Cell: row => {
        return (
          <div className="cell-container">
            <img className="cell-data-image" src={row.value.image} />
            <div>
              <span className="cell-data-name">{row.value.dish}</span>
            </div>
          </div>
        )
      }
    },
    {
        Header: 'CHEFS',
        accessor: 'user1',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.value.image} />
              <div>
                <span className="cell-data-name">{row.value.name}</span>
                <span className="cell-data-username">{row.value.username}</span>
              </div>
            </div>
          )
        }
      },
      {
        Header: 'ALLERGENS',
        accessor: 'allergens',
      }, 
    {
   Header: 'ZYMMO TAGS',
   accessor: 'zymmo_tags',
 },{
      Header: 'AMOUNT',
      accessor: 'amount',
      Cell: row => {
        return (
          <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
        )
      }
    },

];