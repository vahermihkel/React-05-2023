import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../data/config.json';

function SingleProduct() {
  // App.js sees URL muutuja
  // HomePage.js sees siia sattumise <Link>

  const [products, setProducts] = useState([]);

  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []) );
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <p>Price: {product.price}</p>
    </div>
  )
}

export default SingleProduct;