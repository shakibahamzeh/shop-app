import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';
import styles from "./ProductDetail.module.css";

function ProductsDetail(props) {
   const params=useParams();
   const id=params.id;
   const data=useContext(ProductContext);
   const product = data[id-1];
   const{image,title,description,price,category}=product;
     
  return (
 <div className={styles.productDetailContainer}>
      <img src={image} alt="product" className={styles.imageDetail}/>
      <div className={styles.productContent}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}><span>Category :</span> {category}</p>
        <div className={styles.buttonContainer}>
           <p className={styles.price}>{price} $</p>
           <Link to="/products" className={styles.backLink}>Back to shop</Link>
        </div>
     </div>
  </div>
  )
}

export default ProductsDetail;
