import React from 'react'
import { Button } from 'react-bootstrap';

function SortButtons(props) {

  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  };

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  };

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  };
  const sortPriceDes = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  };

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
    </div>
  )
}

export default SortButtons