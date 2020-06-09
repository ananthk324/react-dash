import React from 'react';
import ZymmoTagNo from '../../components/ZymmoTagNo';

export default [
    {
        Header: <div>MENUS<i className="fa fa-sort"></i></div>,
        accessor: 'dishes.name',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.row.original.dishes.image} />
              <div>
                <span className="cell-data-name">{row.row.original.dishes.menu}</span>
              </div>
            </div>
          )
        }
    },
    {
        Header: <div>CHEFS<i className="fa fa-sort"></i></div>,
        accessor: 'user1.name',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.row.original.user1.image} />
              <div>
                <span className="cell-data-name">{row.row.original.user1.name}</span>
                <span className="cell-data-username">{row.row.original.user1.username}</span>
              </div>
            </div>
          )
        }
    },
    {
        Header: <div>DATE ADDED<i className="fa fa-sort"></i></div>,
        accessor: 'placed_date',
    },
    {
        Header: <div>NO OF DISHES<i className="fa fa-sort"></i></div>,
        accessor: 'num',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value}</div>
          )
        }
    }, 
    {
        Header: 'ZYMMO TAGS',
        accessor: 'zymmo_tags',
        Cell: row => {
          if (row.value.length > 3) {
            const tags = row.value.slice(0, 3);
            return (
              <div className="zymmo-tags-cell">
                {tags.map(tag => 
                  <div>{tag},</div>
                )}
              <ZymmoTagNo value={row.value.length - 3} />
              </div>
            ) 
          } else {
            return (
              <div className="zymmo-tags-cell">
                {row.value.map(tag => 
                  <div>{tag},</div>
                )}
              </div>
            ) 
          }
        },
        disableSortBy: true
    },
    {
        Header: <div className>AMOUNT<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },
];