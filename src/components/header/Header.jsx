// import React from 'react'
import Hero from "./hero/Hero"
import styles from "./Header.module.css"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className={styles.header}>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Header