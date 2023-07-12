import React from 'react'
import styles from "../../css/HomePage.module.css";
import Button from '@mui/material/Button'; // korraga ei saa olla Bootstrapist ja MUIst import

function Product(props) {

    // OSTUKORVI LISAMINE:
  // Teha "data" kausta juurde fail "cart.json", mille sees on tühjad kandilised sulud

  //  0    1   2
  // [{}, {}, {}]

  // EI LEIA: -1


  const addToCart = (productClicked) => {
    // cartFromFile.push(productClicked);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id)
    if (index >= 0) {
      //const product = cart[index];
      // SUURENDAN KOGUST      quantity = quantity + 1;
      cart[index].quantity = cart[index].quantity + 1;
      // cart[index].quantity += 1;
      // cart[index].quantity++;
    } else {
      // LISAN ÜHE LÕPP JUURDE, KOGUSEGA 1     quantity: 1
      cart.push({"quantity": 1,"product": productClicked});
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));

    // 1. võta localStorage-st vana ostukorv:    localStorage.getItem  ||   []
    // 2. võta sellelelt mis localStorage-st said jutumärgid maha:    JSON.parse()
    // 3. lisa ostukorvi klikitud ese juurde
    // 4. pane jutumärgid tagasi peale: JSON.stringify()
    // 5. pane localStorage-sse uuenenud ostukorv tagasi: localStorage.setItem()
}

  return (
    <div className={styles.product}>
      <img src={props.product.image} alt="" />
      <div className={styles.name}>{props.product.name}</div>
      <div>{props.product.price.toFixed(2)}</div>
      <Button variant="contained" onClick={() => addToCart(props.product)}>Lisa ostukorvi</Button>
    </div>
  )
}

export default Product