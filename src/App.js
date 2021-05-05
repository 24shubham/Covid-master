import './App.css';
import React, { useEffect, useState } from 'react'
import Introduction from './Components/Introduction/Introduction'
import Protect from './Components/Protect/Protect';
import axios from 'axios'
import Casetimechart from './Components/Casetimechart/Casetimechart';
import Statewisechart from './Components/Statewisechart/Statewisechart';
import Vaccinationchart from './Components/Vaccinationchart/Vaccinationchart';
import Predictionchart from './Components/Predictionchart/Predictionchart';
import Latestnews from './Components/Latestnews/Latestnews';
import Footer from './Components/Footer/Footer';

function App() {
  const url = "https://api.covid19india.org/data.json"
  
  const [casetime, setcasetime] = useState([])
  const [statewise, setstatewise] = useState([])
  const [tested, settested] = useState([])
  const [predict,setpredict] = useState([])
  const getData = async () => {
    const response = await axios.get(url)
    const predictData = await axios.get('./forecast.json')
    await setpredict(predictData.data["data"])
    await setcasetime(response.data["cases_time_series"])
    await setstatewise(response.data.statewise)
    await settested(response.data.tested)
  }
  useEffect(() => {
    getData()
  }, [])
  const n = tested.length
  return (
    <div className="App">
      {(statewise.length !== 0 && tested.length !== 0) ? (
        <>
          <div className='Nav'>
            <h2>COVID-<span style={{ color: ' rgba(219, 33, 33, 0.637)' }}>19</span></h2>
          </div>
          <Introduction total_cases={statewise[0].confirmed} total_deaths={statewise[0].deaths} total_recovered={statewise[0].recovered} total_tests={tested[n - 1].totalsamplestested} total_vaccinated={tested[n - 1].totalindividualsvaccinated} />
          <Protect />
          <Casetimechart casetime={casetime} />
          <Statewisechart statewise={statewise} />
          <Vaccinationchart tested_data={tested} />
          <Predictionchart predict={predict}/>
          
          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;
