import React, { createContext, useContext, useState, useCallback } from "react";


const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const productExists = prevCart.some((item) => item.id === product.id);
      return productExists
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
