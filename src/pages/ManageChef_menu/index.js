import React from 'react';
import './ManageChef_menu.css';
import ChefMenu from '../../components/ChefMenu';

const ManageChef_menu = (props) => {
    return (
        <div className="menu-container">
            <ChefMenu {...props}/>
        </div>
    );
}

export default ManageChef_menu;