import React from 'react'
import styles from './Introduction.module.css'
import CovidIcon from '../../Assets/iconfinder_pandemic-disease-virus-infection-coronavirus-incident--covid19_5879326.svg'
import Datacards from './Datacards/Datacards'
const Introduction = ({total_cases,total_deaths,total_recovered,total_tests,total_vaccinated}) => {
    return (
        <div className={styles.Introduction}>
        <div className={styles.Body}>
            <div className={styles.Text}>
                <span>188+ Countries Are Effected By </span>
                <h2  className={styles.Heading}>CORONA</h2>
                <p>The Virus was first reported in Wuhan, Hubel, China on 17 November 2019, and on 11 March 2020, the World Health Organization (WHO) declared the outbreak a pandmic. The Virus is also known by the name COVID-19</p>
                <a href='https://en.wikipedia.org/wiki/COVID-19' target="_blank" rel="noopener noreferrer" style={{color:'#FF834E'}} >More info about  COVID</a>
                </div>
                <img className={styles.Icon} src={CovidIcon} alt='ICON'/>
        </div>
        <Datacards total_cases={total_cases} total_deaths={total_deaths} total_recovered={total_recovered} total_vaccinated={total_vaccinated} total_tests={total_tests}/>
        </div>
    )
}

export default Introduction
