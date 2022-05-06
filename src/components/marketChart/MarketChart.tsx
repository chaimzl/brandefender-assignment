import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './marketChart.scss';
import { DcRate } from './marketChart.types';

const LineChartDemo = (props:{rates:DcRate[]}) => {
   

    const [lineStylesData] = useState({
        labels: props?.rates.map(x=> x.state),
        datasets: [
            {
                label: '',
                data: props.rates.map(x=> x.value),
                fill: true,
                borderColor: '#1976d2',
                tension: .4,
                backgroundColor: '#1976d21a'
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            
            plugins: {
                legend: {
                    labels: {
                        color: '#000'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                <Chart type="line" data={lineStylesData} options={basicOptions} />
            </div>
        </div>
    )
}

export default LineChartDemo;

