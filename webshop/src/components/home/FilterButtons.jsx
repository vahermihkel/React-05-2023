import React from 'react'

function FilterButtons(props) {
  
  const filterByCategory = (categoryClicked) => {
    const result = props.dbProducts.filter(product => product.category === categoryClicked);
    props.setProducts(result);
  }
  
  return (
    <div>
      <button onClick={() => props.setProducts(props.dbProducts)}>All</button>
      {props.categories.map(category => 
        <button onClick={() => filterByCategory(category.name)} key={category.name}>
          {category.name}
        </button>)}
    </div>
  )
}

export default FilterButtons