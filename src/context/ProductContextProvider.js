import React, { createContext, useEffect, useState } from 'react';
import { getProduct } from '../services/api';
//create context 
export const ProductContext=createContext();

const ProductContextProvider=({children})=>{
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      const fetchApi = async()=>{
      setProducts(await getProduct())
    }
    fetchApi()
    },[])
   
  return (
     <ProductContext.Provider value={products}>
      {children}
     </ProductContext.Provider>
  )
}

export default ProductContextProvider;

