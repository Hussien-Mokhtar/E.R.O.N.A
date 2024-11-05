
import React, { useState } from 'react'
// 1. init contxt
export const CartContext = React.createContext()


export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [number,setNumber] = useState(0);

    const addToCart = ()=> {
      const tshirt = {price: slider4.price1}
    setCart (curr => [...curr, tshirt]);
    }  

    const initialState ={
        number,
        setNumber,
        addToCart,
        cart,
        setCart
    }
  return (
  
      <CartContext.Provider value={initialState}>
        {children}

      </CartContext.Provider>
  
  )
}
  
