import React, { useEffect, useRef, useState } from 'react'
import AdminHome from './AdminHome'
// import productsFromFile from "../../data/products.json";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";

function MaintainProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      } );
  }, []);

  const deleteProduct = (index) => {
    products.splice(index,1);
    setProducts(products.slice());
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)});
  }

  const searchedRef = useRef();

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) || 
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase()) || 
      product.id.toString().includes(searchedRef.current.value)
      );
    setProducts(result);
  }

  return (
    <div>
      <AdminHome />
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length} tk</div>
      {products.map((product, index) => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <button onClick={() => deleteProduct(index)}>Kustuta</button>
          <Button variant="primary" as={Link} to={"/admin/edit-product/" + product.id}>{t("change")}</Button>{' '}
        </div>)}
    </div>
  )
}

export default MaintainProducts