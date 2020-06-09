import React from 'react';
import './Header.css';
import Searchbox from './Searchbox';
import AdminDropdownMenu from './AdminDropdownMenu';

const Header = ({ title = "HOME", isSearchBox = true }) => {
    return (
        <div className="header-container">
            <div className="header-title">
                {title}
            </div>
            { isSearchBox && <Searchbox /> }
            <AdminDropdownMenu />
        </div>
    )
}

export default Header;