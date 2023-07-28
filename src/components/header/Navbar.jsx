import styles from "./Navbar.module.css"
import Logo from "../../assets/Logo/Logo.svg"
const Navbar = () => {
  return (
    <nav className={styles.navbarMain}>
        <a href="/"><img className={styles.logo} src={Logo} alt="logo"/></a>
        <ul className={styles.navigation}>
            <li className={styles.li}><a className={styles.a} href="/">Home</a></li>
            <li className={styles.li}><a className={styles.a} href="/">Attorneys</a></li>
            <li className={styles.li}><a className={styles.a} href="/">Practice Areas</a></li>
            <li className={styles.li}><a className={styles.a} href="/">About Us</a></li>
        </ul>
        <button className={styles.contactButton}>Contact Now</button>
    </nav>
    
  )
}

export default Navbar