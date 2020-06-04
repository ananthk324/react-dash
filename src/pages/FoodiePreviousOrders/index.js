import React from 'react';
import './FoodiePreviousOrders.css';
import Table from '../../components/Table';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnsForTableOrders';

const FoodiePreviousOrders = () => {
    return (
        <div className="foodie-previous-orders-container">
            <div className="breadcrumbs-container">
                <div>Manage Foodies<i className="fa fa-angle-right"></i></div>
                <div>Fredrick Thompson<i className="fa fa-angle-right"></i></div>
                <div>Previous Orders</div>
            </div>
            <div className="previous-orders-title">PREVIOUS ORDERS</div>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default FoodiePreviousOrders;