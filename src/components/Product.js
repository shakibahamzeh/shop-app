import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { shorten,isInCart,quantityCounter } from '../helper/functions';
import { CartContext } from '../context/CartContextProvider';
import styles from "./Product.module.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Product=({productData})=> {
  const {state,dispatch} = useContext(CartContext);
   
  return (
  <div className={styles.productContainer}>
      <div>
         <img src={productData.image} alt="product" className={styles.productImage}/>
         <h2>{shorten(productData.title)}</h2>
         <Link to={`/products/${productData.id}`} className={styles.detailLink}>Details</Link>
         <div className={styles.btnWrapper}>
            <div>
         {
            isInCart(state,productData.id) ?
            <button onClick={()=> dispatch({type:"INCREASE" , payload: productData})} className={styles.increaseBtn}>
               <AddIcon className={styles.addIcon}/>
            </button>
             :
             <button onClick={()=> dispatch({type:"ADD_ITEM" , payload: productData})} className={styles.addToCartBtn}>ADD TO CART</button>
          }
          </div>
          <div>
         
          {
             quantityCounter(state,productData.id) > 0 && <span className={styles.counter}>{quantityCounter(state,productData.id)}</span>
          }
          </div>
          <div>
           {
             quantityCounter(state,productData.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:productData})} className={styles.removeBtn}>
                <DeleteOutlineIcon className={styles.deleteIcon}/>
             </button>
          }
          </div>
          <div>
          {
            quantityCounter(state,productData.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE" , payload: productData})} className={styles.decreaseBtn}>
               <RemoveIcon className={styles.decreaseIcon}/>
            </button>
          }
        </div>
         </div>
      </div>
  </div>
  )
  
}

export default Product;
