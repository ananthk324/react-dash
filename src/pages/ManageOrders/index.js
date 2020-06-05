import React from 'react';
import './ManageOrders.css';
import HeaderWithFilter from '../../components/Header/HeaderWithFilter';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnManageOrders';

const ManageOrders = () => {
    return (
        <div className="manage-orders-container">
            <HeaderWithFilter title={"MANAGE ORDERS"} value={"12"} />
            <TableSortable data={data} columns={columns} />
        </div>
    );
}

export default ManageOrders;