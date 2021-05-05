import React from 'react'
import styles from './Guidelines.module.css'
import  Handwash from '../../../Assets/Coronavirus Icons/JSON/01.json'
import Mask from '../../../Assets/Coronavirus Icons/JSON/02.json'
import Sanitize from '../../../Assets/Coronavirus Icons/JSON/03.json'
import Quarantine from '../../../Assets/Coronavirus Icons/JSON/04.json'
import HandShake from '../../../Assets/Coronavirus Icons/JSON/05.json'
import Virus from '../../../Assets/Coronavirus Icons/JSON/06.json'
import Guideline from './Guideline/Guideline'
const messages=["Wash Your Hands Regularly","Mask Up Properly!! Whenever Out","Sanitize When Hand Wash Isn't Available","Social Distancing Is Must","Quarantine Yourself If Suspected Or Infected","Believe Yourself You can Fight Out Of It"]
const animationDatas=[Handwash,Mask,Sanitize,HandShake,Quarantine,Virus]
const Guidelines = () => {
    return (
        <div className={styles.Guidelines}>
            {animationDatas.map((e,i)=>(
                <Guideline data={e} message={messages[i]}  key={i}/>
            ))}
        </div>
    )
}

export default Guidelines
