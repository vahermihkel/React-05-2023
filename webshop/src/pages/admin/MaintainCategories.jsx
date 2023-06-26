import React, { useEffect, useRef, useState } from 'react'
import AdminHome from './AdminHome'
import { Button } from 'react-bootstrap';
import config from "../../data/config.json";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  // fetch("https://mihkel-webshop-05-2023-default-rtdb.europe-west1.firebasedatabase.app/categories.json")
  // componentDidMount   componentWillMount
  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []) );
  }, []);
   
  const addCategory = () => {
    categories.push({name: categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categoryUrl, {method: "PUT", body: JSON.stringify(categories)});
  }

  const deleteCategory = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(config.categoryUrl, {method: "PUT", body: JSON.stringify(categories)});
  }

  return (
    <div>
      <AdminHome />
      <label>Kategooria nimi</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <Button onClick={addCategory}>Sisesta</Button>
      <div>{categories.map((element, index) => 
        <div key={element.name}>
          {element.name}
          <button onClick={() => deleteCategory(index)}>Kustuta</button>
        </div>)}</div>
    </div>
  )
}

export default MaintainCategories