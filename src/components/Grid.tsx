import React from 'react'
import Image from 'next/image'
import styles from '../styles/Grid.module.css'
import gridImageOne from '../public/images/contact.png'
import gridImageTwo from '../public/images/portfolio.png'
import gridImageThree from '../public/images/logistic.png'
import gridImageFour from '../public/images/supplychain.png'

const Grid = () => {
  return (
    <div className={styles.gridWrap}>
<div className={styles.grid_container}>
    <div className={styles.grid_item}>
      <Image src={gridImageOne} alt="Image 1"/>
      <h2>Contact Us!</h2>
      <p>24/7 Customer Service and Inquiries</p>
    </div>
    <div className={styles.grid_item}>
      <Image src={gridImageTwo} alt="Image 2"/>
    </div>
    <div className={styles.grid_item}>
      <Image src={gridImageThree} alt="Image 3"/>
    </div>
    <div className={styles.grid_item}>
      <Image src={gridImageFour} alt="Image 4"/>
    </div>
  </div>
    </div>
  )
}

export default Grid
