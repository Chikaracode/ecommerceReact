import styles from "./CartWidget.module.css"
import { FaOpencart } from "react-icons/fa" 

const CartWidget = () => {
  return (
  <div className={styles.contenCart}>
      <FaOpencart size={40} className={styles.iconCart}/>
      <span className={styles.countCart}>0</span>
  </div>
  )
};

export default CartWidget;
