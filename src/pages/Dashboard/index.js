import React from 'react';
import './Dashboard.css';
import SideNav from '../../components/SideNav';
import Routes from '../../routes/Routes';

const Dashboard = () => {
    return (
        <div className="container">
            <SideNav />
            <div className="main">
                <Routes />
            </div>
        </div>
    );
}

export default Dashboard;