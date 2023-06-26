import React, { useEffect, useState } from 'react'
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";
import { Button } from 'react-bootstrap';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []) );
  }, []);

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };
  const sortPriceDes = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  // OSTUKORVI LISAMINE:
  // Teha "data" kausta juurde fail "cart.json", mille sees on tühjad kandilised sulud

  // const addToCart = (productClicked) => {
  //     cartFromFile juurde panna
  //}

  return (
    <div>
      <Button variant="warning" onClick={sortAZ}>
        Sort A-Z
      </Button>{' '}
      <Button variant="danger" onClick={sortZA}>
        Sort Z-A
      </Button>{' '}
      <Button variant="info" onClick={sortPriceAsc}>
        Sort price ASC
      </Button>{' '}
      <Button variant="dark" onClick={sortPriceDes}>
        Sort price DESC
      </Button>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default HomePage