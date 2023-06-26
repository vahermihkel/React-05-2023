import React, { useEffect, useRef, useState } from 'react'
import AdminHome from './AdminHome'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function EditProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.id === Number(id));

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      } );
  }, []);

  const edit = async () => {
    const index = products.findIndex(product => product.id === Number(id));
  
    const newProduct = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }

    products[index] = newProduct;
    await fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)});
    navigate("/admin/maintain-products");

    // fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)})
    //   .then(() => navigate("/admin/maintain-products"));
  }

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <AdminHome />
      {found !== undefined && <div>
        <label>ID</label> <br />
        <input ref={idRef} type="number" defaultValue={found.id} /> <br />
        <label>Nimi</label> <br />
        <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
        <label>Hind</label> <br />
        <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
        <label>Pilt</label> <br />
        <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
        <label>Kategooria</label> <br />
        <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
        <label>Kirjeldus</label> <br />
        <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
        <label>Aktiivsus</label> <br />
        <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
        <button onClick={edit}>Muuda</button>
      </div>}
      {found === undefined && <div>Product not found!</div>}
    </div>
  )
}

export default EditProduct