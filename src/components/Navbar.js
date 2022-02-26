import React,{useContext} from 'react';
import { CartContext } from '../context/CartContextProvider';
import shopIcons from "../assets/icons/icons8-shopping-cart-24.png"
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";



const Navbar = () => {
    const {state} = useContext(CartContext);
  return (
      <div className={styles.navbar}>
          
              <Link to="/products" className={styles.productLink}>Products</Link>
              <div className={styles.navCartContainer}>
                  <Link to="/cart" className={styles.cartLink}>
                    <img src={shopIcons} alt="icon" className={styles.cartIcon}/></Link>
                    <span className={styles.cartIconBadge}>{state.itemsCounter}</span>
              </div>
          
      </div>

  )
}

export default Navbar;
