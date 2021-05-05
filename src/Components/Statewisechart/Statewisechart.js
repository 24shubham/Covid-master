import React from 'react'
import { Bar } from 'react-chartjs-2'
const Statewisechart = ({ statewise }) => {
    const top_ten = statewise.sort((a, b) => b.active - a.active).slice(1, 11)
    const labels = []
    const active = []
    const recovered = []
    const death=[]
    const confirmed = top_ten.map(el => {
        labels.push(el.state)
        active.push(parseInt(el.active))
        recovered.push(parseInt(el.recovered))
        death.push(parseInt(el.deaths))
        return (parseInt(el.confirmed))
    })
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Active',
                data: active,
                backgroundColor: 'rgba(0, 53, 138, 0.5)',
                borderColor: 'rgba(0, 53, 138, 1)',
                fill: true
            },

            {
                label: 'Confirmed',
                data: confirmed,
                backgroundColor: 'rgba(102, 38, 171,0.5)',
                borderColor: 'rgba(102, 38, 171,1)',
                fill: true
            },
            {
                label: 'Recovered',
                data: recovered,
                backgroundColor: 'rgba(25, 148, 3, 0.5)',
                borderColor: 'rgba(25, 148,3, 1)',
                fill: true
            },
            {
                label: 'Deaths',
                data:death,
                backgroundColor: 'rgba(212, 28, 28,0.5)',
                borderColor: 'rgba(212, 28, 28,1)',
                fill: true
            },

        ]
    }
    const options={scales: {
        x: {
            title: {
                display: true,
                text: 'STATES',
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
            text:'COVID  V/S States',
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
    }}
    return (
        <div style={{ backgroundColor: 'rgba(87,152,236)',textAlign:'center',width:'100vw'}}>
            <h1 style={{ marginTop: 0,paddingTop: '2%' }}>Top 10 States In Terms Of Active Cases</h1>
            <h3 style={{ marginTop: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            <Bar data={data} height={99} width={250} options={options} />
        </div>
    )
}

export default Statewisechart
