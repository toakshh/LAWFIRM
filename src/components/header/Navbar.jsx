import styles from "./Navbar.module.css"
import Logo from "../../assets/Logo/Logo.svg"
const Navbar = () => {
  const navBarLinks = [
    { id: 'home', label: 'Home' },
    { id: 'attorneys', label: 'Attorneys' },
    { id: 'praticeareas', label: 'Pratice Areas' },
    { id: 'about-us', label: 'About us' },
  ];
  return (
    <nav className={styles.navbarMain}>
        <a href="/"><img className={styles.logo} src={Logo} alt="logo"/></a>
        <ul className={styles.navigation}>
          {
            navBarLinks.map(item=>{
              return (<li key={item.id} className={styles.li}><a className={styles.a} href="/">{item.label}</a></li>)

            })
          }
            
        </ul>
        <button className={styles.contactButton}>Contact Now</button>
    </nav>
    
  )
}

export default Navbar