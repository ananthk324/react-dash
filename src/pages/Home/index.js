import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import DataBar from '../../components/DataBar';
import MapSection from '../../components/MapSection';
import Chart from '../../components/Chart';

const Home = () => {

    const data = [
        { text: "Revenue", value: "$1429" },
        { text: "New Chef", value: "158" },
        { text: "New Foodie", value: "788" },
        { text: "New Menu", value: "52" },
        { text: "New Dish", value: "101" },
    ];

    const title = "TODAY'S DATA";

    return (
        <div className="home-container">
            <Header />
            <DataBar title={title} data={data} />
            <MapSection />
            <Chart />
        </div>
    );
}

export default Home;