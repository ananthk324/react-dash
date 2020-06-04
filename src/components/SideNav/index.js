import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';
import Logo from '../../assets/logos';

const SideNav = () => {
    const logo = Logo.logo;

    return (
        <nav className="sidenav">
            <div className="zymmo-logo">
                <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    <img src={logo} alt="Zymmo Logo" />
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Home
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/orders"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Orders
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/chefs"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Chefs
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/foodies"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Foodies
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/menus"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Menus
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/dishes"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Dishes
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/financials"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Financials
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink
                    to="/payouts"
                    className="nav-link"
                    activeClassName="nav-link--active">  
                    Payouts to Chefs
                </NavLink>
            </div>
        </nav>
    );
}

export default SideNav;