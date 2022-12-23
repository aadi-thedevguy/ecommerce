import { useState, createContext } from 'react';

export const CartContext = createContext()

const CartProvider = (props) => {
 
  const [cartItems, setcartItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addItemToCartHandler = (product, quantity) => {

    setQuantity( prevQty => prevQty + quantity)
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    if(checkProductInCart) {
      const updatedcartItems = cartItems.map(item => {
        if(item.id === product.id) return {
            ...item,
            quantity: item.quantity + quantity
          }
        })
      setcartItems(updatedcartItems);
    } else {
      product.quantity = quantity
      setcartItems([...cartItems, product ]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const newcartItems = cartItems.filter(item => item.id !== id);
    let foundItem = cartItems.find((item) => item.id === id);

    if (quantity > 0) setQuantity(prevQty => prevQty - 1)
    if (foundItem.quantity > 1) {
      setcartItems([...newcartItems, { ...foundItem, quantity: foundItem.quantity - 1 } ])
    } else {

      setcartItems(newcartItems);
    }
    
  };

  const cartContext = {
    cartItems,
    totalAmount: 0,
    totalQty: quantity,
    addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;