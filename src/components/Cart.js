import React,{useContext} from 'react';
import { CartContext } from '../context/CartContextProvider';
import { shorten } from '../helper/functions';
import styles from "./Cart.module.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Cart = (props) => {
    const {dispatch} = useContext(CartContext);
    const {image,price,title,quantity} = props.data;
  return (
      <div className={styles.cart}>
          <img src={image} alt="product" className={styles.image}/>
          <div>
              <h3>{shorten(title)}</h3>
          </div>
          <p>{price}</p>
          <div className={styles.quantity}>
              <span>{quantity}</span>
          </div>
          <div>
              {
                  quantity > 1 ?
                  <button onClick={()=> dispatch({type:"DECREASE" , payload : props.data})} className={styles.decreaseBtn}>
                      <RemoveIcon className={styles.decreaseIcon}/>
                  </button> :
                  <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload : props.data})} className={styles.removeBtn}>
                      <DeleteOutlineIcon className={styles.deleteIcon}/>
                  </button>
              }
              <button onClick={()=> dispatch({type:"INCREASE" , payload:props.data})} className={styles.increaseBtn}>
                  <AddIcon className={styles.addIcon}/>
              </button>
          </div>
      </div>
  )
}

export default Cart;
