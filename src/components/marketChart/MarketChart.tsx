import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './marketChart.scss';
import { DcRate } from './marketChart.types';
import { useEffect } from 'react';

const LineChartDemo = (props: { rates: DcRate[] }) => {

    const data={
        labels: props?.rates.map(x => x.state),
        datasets: [
            {
                label: '',
                data: props.rates.map(x => x.value),
                fill: true,
                borderColor: '#1976d2',
                tension: .4,
                backgroundColor: '#1976d21a'
            }
        ]
    }

    useEffect(() => {
        data.labels= props?.rates.map(x => x.state);
        data.datasets[0].data=props.rates.map(x => x.value);
        setLineStylesData(data);
    }, [props.rates]);
    const [lineStylesData,setLineStylesData] = useState(data);

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

