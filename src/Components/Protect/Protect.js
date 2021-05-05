import React from 'react'
import Guidelines from './Guidelines/Guidelines'
import styles from './Protect.module.css'
const Protect = () => {
    return (
        <div className={styles.Protect}>
            <h1 className={styles.Heading}>How To Protect Yourself From COVID-19 </h1>
            <Guidelines/>
        </div>
    )
}

export default Protect
