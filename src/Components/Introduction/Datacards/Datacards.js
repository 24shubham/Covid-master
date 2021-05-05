import React from 'react'
import Datacard from './Datacard/Datacard'
import styles from './Datacards.module.css'
const Datacards = ({total_cases,total_deaths,total_recovered,total_vaccinated,total_tests}) => {
    return (
        <div className={styles.Datacards}>
            <Datacard data={total_cases} name="Total Virus Cases" color="Blue"/>
            <Datacard data={total_deaths} name="Total Deaths" color="Red"/>
            <Datacard data={total_recovered} name="Total Recovered" color="Green"/>
            <Datacard data={total_tests} name="Total Tests " color="Yellow"/>
            <Datacard data={total_vaccinated} name="Total Vaccinated" color="Pink"/>
        </div>
    )
}

export default Datacards
