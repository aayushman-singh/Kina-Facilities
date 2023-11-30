import React from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import imageAsset from '../public/images/logo.png'

const Nav: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Image src={imageAsset} alt="Kina" />
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
         Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Profile
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact Us
        </Link>
      </div>     
    </nav>
  );
};

export default Nav;
