import React, { useEffect, useState } from 'react'
import AdminHome from './AdminHome'
// import productsFromFile from "../../data/products.json";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";

function MaintainProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []) );
  }, []);

  const deleteProduct = (index) => {
    products.splice(index,1);
    setProducts(products.slice());
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)});
  }

  return (
    <div>
      <AdminHome />
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