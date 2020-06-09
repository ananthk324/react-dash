import React from 'react';
import './ManageDishes.css';
import HeaderWithFilter from '../../components/Header/HeaderWithFilter';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from './columnsForManageDishes';

const ManageDishes = () => {
    return (
        <div className="manage-dishes-container">
            <HeaderWithFilter title={"MANAGE DISHES"} value={"32"} path={"/menus/view/dish"} />
            <TableSortable data={data} columns={columns} />
        </div>
    );
}

export default ManageDishes;