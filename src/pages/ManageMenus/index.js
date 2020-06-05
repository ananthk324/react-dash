import React from 'react';
import './ManageMenus.css';
import HeaderWithFilter from '../../components/Header/HeaderWithFilter';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnManageMenus';

const ManageMenus = () => {
    return (
        <div className="manage-menus-container">
            <HeaderWithFilter title={"MANAGE MENUS"} value={"124"} path={"/menus/view/menu"} />
            <TableSortable data={data} columns={columns} />
        </div>
    );
}

export default ManageMenus;