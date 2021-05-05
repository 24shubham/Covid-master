import React from 'react'
import { Line } from 'react-chartjs-2';
const Vaccinationchart = ({ tested_data }) => {
    const first_vaccinated = []
    const second_vaccinated = []
    const labels = []
    var dd=''
    var mm=''
    var yy=''
    const monthNames = ["-","January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const tested = tested_data.slice(70).map((el) => {
        if (el.firstdoseadministered !== '') {
            first_vaccinated.push(parseInt(el.firstdoseadministered))
        }
        else{
            first_vaccinated.push(parseInt(0))
        }
        if (el.seconddoseadministered !== '') {
            second_vaccinated.push(parseInt(el.seconddoseadministered))
        }
        else{
            second_vaccinated.push(0)
        }
        
        [dd,mm,yy]=el.testedasof.split('/')
        labels.push(dd+' '+monthNames[parseInt(mm)]+' '+yy)
        if(el.samplereportedtoday===""){
            return(null)
        }
        return (parseInt(el.samplereportedtoday))

    })
    const data = {
        labels: labels,
        datasets: [{
            label: 'Tests',
            data: tested,
            fill:true,
            borderColor: 'rgba(223, 164, 76, 1)',
            backgroundColor: 'rgba(223, 164, 76, 0.6)',
            
        },
        {
            label: '1st Dose Vaccinated',
            data: first_vaccinated,
            fill:true,
            borderColor: 'rgb(252, 98, 252,1)',
            backgroundColor: 'rgb(252, 98, 252,0.6)',
        },{
            label:'2nd Dose Vaccinated',
            data:second_vaccinated,
            fill:true,
            borderColor:'rgb(252,200,190)',
            backgroundColor:'rgb(252,200,190,0.6)',
        }]
    }
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
                text:'Vaccination And Tests V/S Time',
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
        <div style={{ backgroundColor: '#5268E7',textAlign:'center',width:'100vw'}}>
            <h1 style={{ marginTop: 0,paddingTop: '2%' }}>Comparision Between Vaccination And Tests (India)</h1>
            <h3 style={{ marginTop: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            <Line data={data} options={options} />
        </div>
    )
}

export default Vaccinationchart
