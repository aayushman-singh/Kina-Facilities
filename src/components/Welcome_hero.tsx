import React from 'react'
import styles from '../styles/Welcome.module.css'

const Welcome_hero = () => {
  return (
    <div className={styles.bgImg}>
    <div className={styles.container}>
        <h1>Smart Digital Agency For<br></br> Your Consulting Needs</h1><br></br>
        <div className={styles.btnContainer}>
        <button className={styles.btn1}>View Portfolio</button>
        <button className={styles.btn2}>Contact Us</button>
        </div>
    </div>
    </div>
  )
}

export default Welcome_hero