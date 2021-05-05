import React from 'react'
import styles from './Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Container}>
            <h3>Created by -- Gaurav Parihar , Shubham Tak</h3>
        
            </div>
            <div>
                <h5 style={{marginBottom:'0'}}>All Rights Reserved <br></br> &#169;  Copyright 2021  </h5>
            </div>
            <div className={styles.Links}>
                <h4>Let's Socialise</h4>
                <div>
                    <a href='https://www.instagram.com/a.y.a.n.shrivastava/' target="_blank" rel="noopener noreferrer"><InstagramIcon style={{margin:'0 5%'}}/></a>
                    <a href='https://www.linkedin.com/in/ayan-shrivastava-248501194/' target="_blank" rel="noopener noreferrer" ><LinkedInIcon/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
