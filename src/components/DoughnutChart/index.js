import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './doughnutchart.css'

export default function DoughnutChart() {

    const [doughnut, setdoughnut] = useState('')
    const [dataSet, setdataSet] = useState([50, 40, 30])

    const chart = () => {
        setdoughnut({
            labels: ['Order booked','Order delivered', 'Order cancelled'],
            datasets: [
                {
                    data: dataSet,
                    backgroundColor: ['#F3CFCF','#095D31', '#EC3D3D'],
                    // hoverBackgroundColor: [
                    //     "#FF6384",
                    //     "#36A2EB",
                    //     "#FFCE56"
                    //   ]
                }
            ]
        })
    }

    // Chart.pluginService.register({
    //     beforeDraw: function(chart) {
    //       var width = chart.chart.width,
    //           height = chart.chart.height,
    //           ctx = chart.chart.ctx;

    //       ctx.restore();
    //       var fontSize = (height / 114).toFixed(2);
    //       ctx.font = fontSize + "em sans-serif";
    //       ctx.textBaseline = "middle";

    //       var text = "75%",
    //           textX = Math.round((width - ctx.measureText(text).width) / 2),
    //           textY = height / 2;

    //       ctx.fillText(text, textX, textY);
    //       ctx.save();
    //     }
    // });

    useEffect(() => {
        chart()
    }, [])


    return (
        <div className='doughnutchart'>
            <div className="doughnutchart-title">ORDERS</div>
            <div className='doughtnut-center'>
                <span>Total</span>
                <span> {dataSet.reduce((a, b) => a + b, 0)} </span>
            </div>
            <Doughnut data={doughnut}
                width={200} height={240}
                options={{
                    tooltips: {
                        backgroundColor: '#f7f7f7',
                        bodyFontColor:'#000000',
                        cornerRadius: 4,
                      } ,
                    cutoutPercentage: 70,
                    responsive: true,
                    legend: {
                        display: true,
                        position: "bottom",
                        align: 'start',
                        labels: {
                            boxWidth: 15,
                            fontSize: 15,
                            padding: 10,
                            fontColor: 'black',
                            fontFamily: 'Quicksand'
                        }
                    },
                    elements: {
                        center: {
                            text: "hello",
                            color: 'red',
                            fontStyle: 'Quicksand'
                        }
                    }
                }}
            />
        </div>
    )
}
