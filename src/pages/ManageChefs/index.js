import React from 'react';
import './ManageChefs.css';
import HeaderWithFilter from '../../components/Header/HeaderWithFilter';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnManageChefs';

const ManageChefs = () => {
    return (
        <div className="manage-chefs-container">
            <HeaderWithFilter title={"MANAGE CHEFS"} value={"10"} path={"/chefs/view"} />
            <TableSortable data={data} columns={columns} />
        </div>
    );
}

export default ManageChefs;