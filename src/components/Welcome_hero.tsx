import React from 'react'
import styles from '../styles/Welcome.module.css'

const Welcome_hero = () => {
  return (
    <div className={styles.container}>
        <h1>Smart Digital Agency For<br></br> Your Consulting Needs</h1><br></br>
        <button className={styles.btn}>View Portfolio</button>
    </div>
  )
}

export default Welcome_hero