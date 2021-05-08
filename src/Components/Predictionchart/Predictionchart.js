import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
defaults.color = 'rgba(255,255,255)'
const Predictionchart = ({ predict }) => {
    
    const labels = []
    
    const cases = predict.map((el) => {
        
        labels.push(el.Date_YMD)
        
        return (parseInt(el.Delta))
    }) 
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Forecasting',
                data: cases,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            }
        ],
    };

    const options = {
        elements: {
            point:{
                radius: 1
            }},
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'DAYS',
                    color: 'white',
                    font:{
                        size:20,
                        weight:'bold'
                    }
                },
                ticks: {
                    display: true,
                    color:'white'
                },
                

            },
            y: {
                title: {
                    display: true,
                    text: 'Case Load',
                    color: 'white',
                    font:{
                        size:20,
                        weight:'bold'
                    }
                },
            }
        },
        plugins: {
            title:{
                display:true,
                text:'Case Load V/S Time',
                font:{
                    size:25,
                    weight:'bold'
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 35
                    }
                }
            }
        },
        layout: {
            padding: 43
        }
    }


    return (
        <div style={{ backgroundColor: '#ffb366', height: '105vh', width: '100vw', textAlign: 'center' }}>
            <h1 style={{ marginTop: 0,paddingTop: '2%' }}>Forecasting of Case Load Rate(India)</h1>
            <h3 style={{ marginTop: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            <Line data={data} options={options} height={99} width={250} />
        </div>
    )
}

export default Predictionchart
