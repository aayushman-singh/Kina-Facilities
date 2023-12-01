import React from 'react'
import Image from 'next/image'
import trans from '../public/images/trans.svg'
import styles from '../styles/Trans.module.css'

const Transition = () => {
  return (
    <div className={styles.trans}>
        <Image className={styles.transImg} src={trans} alt="transition"/>
    </div>
  )
}

export default Transition