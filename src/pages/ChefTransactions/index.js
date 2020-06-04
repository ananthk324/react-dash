import React from 'react';
import './ChefTransactions.css';
import Table from '../../components/Table';
import Images from '../../assets/icons';

const ChefTransactions = () => {
    return (
        <div className="chef-transactions-container">
            <Table columns={columns} data={data} />
        </div>
    );
}

export default ChefTransactions;

const columns = [
    {
      Header: 'CHEFS',
      accessor: 'chefs',
      Cell: row => {
        return (
          <div className="chef-table-cell">
            <img className="chef-table-image" src={row.value.image} />
            <div>
              <span className="data-name">{row.value.name}</span>
              <span className="data-username">{row.value.username}</span>
            </div>
          </div>
        )
      }
    }, {
      Header: 'DISHES',
      accessor: 'dishes',
      Cell: row => {
        return (
          <div className="chef-table-cell">
            <img className="chef-table-image" src={row.value.image} />
            <span className="data-dish">{row.value.dish}</span>
          </div>
        )
      }
    }, {
      Header: 'PLACED DATE',
      accessor: 'placed_date'
    }, {
      Header: 'DELIVERY DATE',
      accessor: 'delivery_date'
    }, {
      Header: 'STATUS',
      accessor: 'status'
    }

];

const data = [
    {
      chefs: { 
        name: 'Leanne Graham',
        username: '@leanne',
        image: Images.user1
      },
      dishes: {
        dish: 'Chicken Pizza',
        image: Images.dish1
      },
      placed_date: '19-04-2020',
      delivery_date: '28-04-2020',
      status: 'Requested'
    },
    {
      chefs: { 
        name: 'Steve Graham',
        username: '@steve',
        image: Images.user2
      },
      dishes: {
        dish: 'Pasta',
        image: Images.dish2
      },
      placed_date: '18-04-2020',
      delivery_date: '28-04-2020',
      status: 'Pending'
    }                         
];