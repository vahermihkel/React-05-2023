import React, { useEffect, useRef, useState } from 'react';
// import cartFromFile from "../../data/cart.json";
import "../../css/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]); // väljanäidatav
  const [dbParcelMachines, setDbParcelMachines] = useState([]); // otse andmebaasist

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(data => {
        setParcelMachines(data);
        setDbParcelMachines(data);
      });
  }, []);

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

  const parcelMachineRef = useRef(); // useRef importida

  const searchFromPMs = () => {             // product.category === categoryClicked
    const result = dbParcelMachines.filter(pm => 
          pm.NAME.toLowerCase().includes(parcelMachineRef.current.value.toLowerCase()));
    setParcelMachines(result);
  }

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

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div className="product" key={item.product.id}>
          <img className="image" src={item.product.image} alt="" />
          <div className="name">{item.product.name}</div>
          <div className="price">{item.product.price.toFixed(2)} €</div>
          <div className="quantity">
            <img src="/minus.png" alt="" className="button" onClick={() => decreaseQuantity(index)} />
            <div>{item.quantity} tk</div>
            <img src="/plus.png" alt="" className="button" onClick={() => increaseQuantity(index)} />
          </div>
          <div className="total">{(item.product.price * item.quantity).toFixed(2)}</div>
          <img src="remove.png" alt="" className="button" onClick={() => deleteFromCart(index)} />
          </div>
        ))}
        <button onClick={emptyCart}>Empty Cart</button>
        <br />
        <React.Fragment>
          <input onChange={searchFromPMs} ref={parcelMachineRef} type="text" />
          <select>
            {parcelMachines
              .filter(pm => pm.A0_NAME === "EE")
              .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
          </select>
        </React.Fragment>
      </div>
    );
  };
  
  export default Cart;