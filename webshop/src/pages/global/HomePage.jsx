import React, { useEffect, useState } from 'react'
// import cartFromFile from "../../data/cart.json";
import config from "../../data/config.json";
// import { Button } from 'react-bootstrap';
import styles from "../../css/HomePage.module.css";
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import Product from '../../components/home/Product';

// Andmebaas ---> tooted, kategooriad, kasutajad, poed, ....
// Brauserisse ---> ostukorvi

function HomePage() {
  const [products, setProducts] = useState([]); // muudan lõpmatuseni: sorteerimisega, kategooria vahetusega
  const [dbProducts, setDbProducts] = useState([]); // otse andmebaasist - muutumatu
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []) );
  }, []);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // 964
        setDbProducts(json || []); // 964
      } );
  }, []);
  

  return (
    <div>
      <SortButtons products={products} setProducts={setProducts} />
      <div>{products.length} pcs</div>
      <FilterButtons 
        dbProducts={dbProducts} 
        setProducts={setProducts}
        categories={categories} />
      <div className={styles.products}>
        {products.map(product => 
          <Product key={product.id} product={product} />
          )}
      </div>
    </div>
  )
}

export default HomePage