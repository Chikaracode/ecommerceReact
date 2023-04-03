// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css" 

const Navbar = () => {
  
  return (
    <div className={styles.containerNavbar}>
      <img src="https://res.cloudinary.com/dbzv6juuv/image/upload/v1680396074/CHIKUMA_1_kdtpdl.png" alt="chikumaImport" />
        <ul className={styles.list}>
            <li className={styles.btnList}>Home</li>
            <li className={styles.btnList}>Productos del Hogar</li>
            <li className={styles.btnList}>Skincare</li>
            <li className={styles.btnList}>Kawaii</li>
            <li className={styles.btnList}>Tecnología</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar  