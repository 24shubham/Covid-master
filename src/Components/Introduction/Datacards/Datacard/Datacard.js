import React from 'react'
import styles from './Datacard.module.css'

const Datacard = ({data,name,color}) => {
    const cls=[styles.Datacard]
    switch (color) {
        case 'Red':
            cls.push(styles.Red)
            break;
        case 'Blue':
            cls.push(styles.Blue)
            break;
        case 'Green':
            cls.push(styles.Green)
            break;
        case 'Pink':
            cls.push(styles.Pink)
            break
        case 'Yellow':
            cls.push(styles.Yellow)
            break
        default:
            break;
    }
    return (
        <div className={cls.join(' ')}>
        <h1 style={{marginBottom:'1.5px'}}>{data}</h1>
        <h4 style={{marginBottom:'0'}}>{name}</h4>
        (in India)            
        </div>
    )
}

export default Datacard
