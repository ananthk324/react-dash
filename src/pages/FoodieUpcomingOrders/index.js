import React from 'react';
import './FoodieUpcomingOrders.css';
import Table from '../../components/Table';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnsForTableOrders';

const FoodieUpcomingOrders = () => {
    return (
        <div className="foodie-upcoming-orders-container">
            <div className="breadcrumbs-container">
                <div>Manage Foodies<i className="fa fa-angle-right"></i></div>
                <div>Fredrick Thompson<i className="fa fa-angle-right"></i></div>
                <div>Upcoming Orders</div>
            </div>
            <div className="upcoming-orders-title">UPCOMING ORDERS</div>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default FoodieUpcomingOrders;