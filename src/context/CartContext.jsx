import { useState, createContext } from 'react';

export const CartContext = createContext()

const CartProvider = (props) => {

  const url = 'https://crudcrud.com/api/98dce5cc2fbe42648437a94f4833a549/'

  const [cartItems, setcartItems] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const userEmail = user?.email?.replace(/\.|@/g, "")

  const loginHandler = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  };

  const getItems = async () => {
    const res = await fetch(url + userEmail)
    const data = await res.json()
    setcartItems(data)
  let quantity = 0
  data.forEach(item => {
    quantity = quantity + item.quantity
  })
  setQuantity(quantity)
  }

  const addItemToCartHandler = async (product, quantity) => {
    try {

      const res = await fetch(url + userEmail, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
    } catch (error) {
      console.error(error)
    }
    getItems()
    // setQuantity(prevQty => prevQty + quantity)
    
    // const checkProductInCart = cartItems.find((item) => item.id === product.id)
    // if (checkProductInCart) {
    //   const updatedcartItems = cartItems.map(item => {
    //     if (item.id === product.id) return {
    //       ...item,
    //       quantity: item.quantity + quantity
    //     }
    //   })
    //   setcartItems(updatedcartItems);
    // } else {
    //   product.quantity = quantity
    //   setcartItems([...cartItems, product]);
    // }
  };


  const cartContext = {
    user,
    cartItems,
    totalQty: quantity,
    addItem: addItemToCartHandler,
    login: loginHandler,
    getItems
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;