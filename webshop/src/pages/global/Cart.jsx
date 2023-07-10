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

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const data = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculateTotalSum(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e7" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://mihkel-05-2023.web.app"
    };

    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
      .then(res => res.json())
      .then(data => window.location.href = data.payment_link);
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

        <div>Total: {calculateTotalSum()} €</div>
        <button onClick={pay}>Pay</button>
      </div>
    );
  };
  
  export default Cart;