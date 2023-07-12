import React, { useState } from 'react';
// import cartFromFile from "../../data/cart.json";
import styles from "../../css/Cart.module.css";
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import Button from '@mui/material/Button';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  

  const deleteFromCart = (index) => {
    // const updatedCart = cart.filter((item) => item.id !== productId);
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };


  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1; 
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1; 
    setCart(cart.slice()); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestab localStorage-sse
  }

  

  // <Link to="/admin">Mine tooteid lisama</Link
  // const navigate = useNavigate()     navigate("/maintain-products");
  // window.location.href = "http://blabla"

  const calculateTotalSum = () => {
    let sum = 0;
    cart.forEach(cartItem => sum = sum + cartItem.product.price * cartItem.quantity);
    return sum.toFixed(2);
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div className={styles.product} key={item.product.id}>
          <img className={styles.image} src={item.product.image} alt="" />
          <div className={styles.name}>{item.product.name}</div>
          <div className={styles.price}>{item.product.price.toFixed(2)} €</div>
          <div className={styles.quantity}>
            <img src="/minus.png" alt="" className={styles.button} onClick={() => decreaseQuantity(index)} />
            <div>{item.quantity} tk</div>
            <img src="/plus.png" alt="" className={styles.button} onClick={() => increaseQuantity(index)} />
          </div>
          <div className={styles.total}>{(item.product.price * item.quantity).toFixed(2)}</div>
          <img src="remove.png" alt="" className={styles.button} onClick={() => deleteFromCart(index)} />
          </div>
        ))}
        <Button variant="outlined" onClick={emptyCart}>Empty Cart</Button>
        <br />
        <ParcelMachines />

        <div>Total: {calculateTotalSum()} €</div>
        <Payment sum={calculateTotalSum()} />
      </div>
    );
  };
  
  export default Cart;