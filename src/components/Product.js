import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TrashIcon from '../assets/icons/icons8-trash.svg';
import { shorten,isInCart,quantityCounter } from '../helper/functions';
import { CartContext } from '../context/CartContextProvider';
import styles from "./Product.module.css";


const Product=({productData})=> {
  const {state,dispatch} = useContext(CartContext);
   
  return (
  <div className={styles.productContainer}>
      <div>
         <img src={productData.image} alt="product" className={styles.productImage}/>
         <h2>{shorten(productData.title)}</h2>
         <Link to={`/products/${productData.id}`} className={styles.detailLink}>Details</Link>
         <div className={styles.btnWrapper}>
         {
            isInCart(state,productData.id) ?
            <button onClick={()=> dispatch({type:"INCREASE" , payload: productData})} className={styles.increaseBtn}>+</button>
             :
             <button onClick={()=> dispatch({type:"ADD_ITEM" , payload: productData})} className={styles.addToCartBtn}>ADD TO CART</button>
          }
         
          {
             quantityCounter(state,productData.id) > 0 && <span className={styles.counter}>{quantityCounter(state,productData.id)}</span>
          }
           {
             quantityCounter(state,productData.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:productData})} className={styles.removeBtn}><img src={TrashIcon} alt="Trash" className={styles.trashIcon}/></button>
          }
          {
            quantityCounter(state,productData.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE" , payload: productData})} className={styles.decreaseBtn}>-</button>
          }
        
         </div>
      </div>
  </div>
  )
  
}

export default Product;
