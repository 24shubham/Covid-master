import React from 'react'
import styles from './Newscard.module.css'
const Newscard = ({title,image_src,url,description}) => {
    return (
        <div className={styles.Newscard}>
            <div className={styles.Imagebg}>
                <img className={styles.Image} src={image_src} alt='Not Available'/>
            </div>
            <h3 className={styles.Title}>{title}</h3>
            <p className={styles.Description}>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" ><button className={styles.Button}>Read more</button></a>   
        </div>
    )
}

export default Newscard
