import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import DataBar from '../../components/DataBar';
import MapSection from '../../components/MapSection';
import Chart from '../../components/Chart';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <DataBar />
            <MapSection />
            <Chart />
        </div>
    );
}

export default Home;