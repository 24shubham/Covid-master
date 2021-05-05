import React from 'react'
import styles from './Guideline.module.css'
import Lottie from 'react-lottie'
const Guideline = ({data,message}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className={styles.Guideline}>
             <Lottie options={defaultOptions} height={340} width={370} style={{color:'red'}} />
             <div className={styles.Message}>{message}</div>
        </div>
    )
}

export default Guideline
