import styles from "./Navbar.module.css"
import PropTypes from "prop-types";

const Navigation = ({footer}) => {
    const navBarLinks = [
        { id: 'home', label: 'Home' },
        { id: 'attorneys', label: 'Attorneys' },
        { id: 'praticeareas', label: 'Pratice Areas' },
        { id: 'about-us', label: 'About Us' },
      ];
  return (
    <ul className={footer ? styles.footerNav :styles.navigation}>
          {
            navBarLinks.map(item=>{
              return (<li key={item.id} className={styles.li}><a className={styles.a} href="/">{item.label}</a></li>)
            })
          }
        </ul>
  )
}
Navigation.propTypes= {
  footer: PropTypes.boolean,
}

export default Navigation