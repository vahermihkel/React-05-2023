import { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []) );
  }, []);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []) );
  }, []);

  const addProduct = () => {
    const newProduct = {
      id: Number(idRef.current.value),
      image: imageRef.current.value,
      name: nameRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      active: activeRef.current.checked,
    };
    products.push(newProduct);
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)});
  };

  return (
  <div>
    <label>ID:</label> <br />
    <input type="number" ref={idRef} /> <br />
    <label>Name:</label> <br />
    <input type="text" ref={nameRef} /> <br />
    <label>Price:</label> <br />
    <input type="number" ref={priceRef} /> <br />
    <label>Image:</label> <br />
    <input type="text" ref={imageRef} /> <br />
    <label>Category:</label> <br />
    {/* <input type="text" ref={categoryRef} />  */}
    <select ref={categoryRef}>
      {categories.map(category => <option key={category.name}>{category.name}</option>)}
    </select>
    <br />
    <label>Description:</label> <br />
    <input type="text" ref={descriptionRef} /> <br />
    <label>Active:</label> <br />
    <input type="checkbox" ref={activeRef} /> <br />
    <button onClick={addProduct}>Add Product</button> <br />
  </div>
  );
  }

  export default AddProduct;