import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import styles from "./ShopCart.module.css";
import Cart from './Cart';

const ShopCart = () => {
  const {state,dispatch} = useContext(CartContext);
  return (
      <div className={styles.shopContainer}>
         <div className={styles.cartContainer}>
           {
             state.selectedItems.map(item => <Cart key={item.id} data={item} />)
           }
         </div>
         <div className={styles.paymentContainer}>
           {
           state.itemsCounter > 0 && <div className={styles.payment}>
             <p><span>Total Items :</span>{state.itemsCounter}</p>
             <p><span>Total payments :</span>{state.total} $</p>
             <div className={styles.paymentBtnContainer}>
               <button onClick={()=> dispatch({type:"CLEAR"})} className={styles.clear}>Clear</button>
               <button onClick={()=> dispatch({type:"CHECKOUT"})} className={styles.checkOut}>CheckOut</button>
             </div>
            </div>
         }
         {
           state.checkOut && 
             <div className={styles.buyMoreContainer}>
             <h3>Checked Out Successfully</h3>
             <Link to="/products" className={styles.backLink}>Buy More</Link>
            </div>
         }
          {
           !state.checkOut && state.itemsCounter === 0 &&
             <div className={styles.buyMoreContainer}>
             <h3>Want to Buy?</h3>
             <Link to="/products" className={styles.backLink}>Go To Shop</Link>
           </div>
         }
         </div>
         </div>
  )
}

export default ShopCart;
