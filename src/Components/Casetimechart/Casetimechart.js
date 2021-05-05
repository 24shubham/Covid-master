import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
defaults.color = 'rgba(255,255,255)'
const Casetimechart = ({ casetime }) => {
    const deaths = []
    const labels = []
    const recovered = []
    const cases = casetime.map((el) => {
        deaths.push(parseInt(el.dailydeceased))
        labels.push(el.date)
        recovered.push(parseInt(el.dailyrecovered))
        return (parseInt(el.dailyconfirmed))
    }) 
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Active',
                data: cases,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Deaths',
                data: deaths,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
                
            },
            {
                label: 'Recovered',
                data: recovered,
                backgroundColor: 'rgba(25, 148, 3, 0.2)',
                borderColor: 'rgba(25, 148, 3, 1)',
                fill: true,
                
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
                    text: 'COUNT',
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
                text:'COVID V/S Time',
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
        <div style={{ backgroundColor: '#3E54D2', height: '105vh', width: '100vw', textAlign: 'center' }}>
            <h1 style={{ marginTop: 0,paddingTop: '2%' }}>Visualised Data of New Cases , Recovery And Deaths (India)</h1>
            <h3 style={{ marginTop: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            <Line data={data} options={options} height={99} width={250} />
        </div>
    )
}

export default Casetimechart
