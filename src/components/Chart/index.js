import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import './Chart.css';
import Dropdown from './Dropdown';

function Chart() {
    const [chartData, setchartData] = useState({})

    const chart = () => {
        setchartData({
            labels: ['Jan', 'Feb', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'New Chef',
                    fill: false,
                    data: [200, 45, 80, 76, 69],
                    borderColor: '#633CBB',
                    pointRadius: 0,
                    borderWidth: 4
                },
                {
                    label: 'New Foodie',
                    fill: false,
                    data: [10, 40, 20, 10, 80],
                    pointRadius: 0,
                    borderColor: '#4E9A2F',
                    borderWidth: 4
                },
                {
                    label: 'New Dishes',
                    fill: false,
                    data: [50, 40, 50, 70, 90],
                    pointRadius: 0,
                    borderColor: '#2D73BE',
                    borderWidth: 4
                },
                {
                    label: 'New Menu',
                    fill: false,
                    data: [60, 70, 50, 70, 50],
                    pointRadius: 0,
                    borderColor: '#AC1E3E',
                    borderWidth: 4
                }
            ]
        })
    }
    

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className='chart'>
            <div className='dropdown'>
                <Dropdown />
            </div>
            <Line data={chartData}
                options={{
                    legend: {
                        display: true,
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            boxWidth: 15,
                            fontSize: 15,
                            fontColor: 'black',
                            fontFamily:'Quicksand',
                            padding: 60
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false,
                                lineWidth:2,
                                drawTicks:false
                                // display:true
                            },
                            ticks:{
                                padding:10
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                // drawOnChartArea: false
                                drawOnChartArea: false,
                                lineWidth:2,
                                drawTicks:false
                            },
                            ticks: {
                                beginAtZero: true,
                                min:0,
                                padding: 10
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default Chart;