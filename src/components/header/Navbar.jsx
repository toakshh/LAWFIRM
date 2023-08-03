import Logo from "./Logo";
import styles from "./Navbar.module.css"
import Navigation from './Navigation'
import Button from './Button'
const Navbar = () => {

  return (
    <nav className={styles.navbarMain}>
      <Logo />
      <Navigation footer={false}/>
      <Button />
    </nav>
    
  )
}

export default Navbar