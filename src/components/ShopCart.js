import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../context/CartContextProvider';
//css
import styles from "./ShopCart.module.css";

import Cart from './Cart';

const ShopCart = () => {
  //context
  const {state,dispatch} = useContext(CartContext);
  return (
    <section className={styles.container}>
      <div className={styles.shopContainer}>
         <div className={styles.cartContainer}>
           {
             state.selectedItems.map(item => <Cart key={item.id} data={item} />)
           }
         </div>
         <div className={styles.paymentContainer}>
          <div>
           {
           state.itemsCounter > 0 && <div className={styles.payment}>
             <div><span>Total Items:</span><p>{state.itemsCounter}</p></div>
             <div><span>Total payments:</span><p>{state.total} $</p></div>
             <div className={styles.paymentBtnContainer}>
               <button onClick={()=> dispatch({type:"CLEAR"})} className={styles.clear}>Clear</button>
               <button onClick={()=> dispatch({type:"CHECKOUT"})} className={styles.checkOut}>CheckOut</button>
             </div>
            </div>
            }
          </div>
         <div className='checkoutContainer'>
         {
           state.checkOut && 
             <div className={styles.buyMoreContainer}>
             <h3>Checked Out Successfully</h3>
             <Link to="/products" className={styles.backLink}>Buy More</Link>
            </div>
         }
         </div>
         <div>
          {
           !state.checkOut && state.itemsCounter === 0 &&
            <div className={styles.buyMoreContainer}>
             <h3>Want to Buy?</h3>
             <Link to="/products" className={styles.backLink}>Go To Shop</Link>
           </div>
         }
         </div>
         </div>
      </div>
    </section>
  )
}

export default ShopCart;
