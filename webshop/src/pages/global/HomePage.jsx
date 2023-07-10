import React, { useEffect, useState } from 'react'
// import cartFromFile from "../../data/cart.json";
import config from "../../data/config.json";
import { Button } from 'react-bootstrap';
import "../../css/HomePage.css";

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

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(result);
  }

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
      <div>{products.length} pcs</div>
      <button onClick={() => setProducts(dbProducts)}>All</button>
      {categories.map(category => 
        <button onClick={() => filterByCategory(category.name)} key={category.name}>
          {category.name}
        </button>)}
      <div className="products">
        {products.map(product => 
          <div className="home-product" key={product.id}>
            <img src={product.image} alt="" />
            <div className="home-name">{product.name}</div>
            <div>{product.price.toFixed(2)}</div>
            <button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
          </div>)}
      </div>
    </div>
  )
}

export default HomePage