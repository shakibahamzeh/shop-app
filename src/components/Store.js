import React, { useContext } from 'react';
//context
import { ProductContext } from '../context/ProductContextProvider';
import Product from './Product';
//css
import styles from "./Store.module.css";



const Store=()=> {
  //context
  const products=useContext(ProductContext);
  return(
  <div className={styles.container}>
     {
         products.map(product=>
             <Product key={product.id} productData={product}/>
         )
     }
  </div>
  );
}

export default Store;
