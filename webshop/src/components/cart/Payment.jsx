import React from 'react'
import Button from '@mui/material/Button';

function Payment(props) { // props kaudu andmete võtmine
//function Payment({sum}) { // object destructuring


  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const data = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": props.sum,
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e7" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://mihkel-05-2023.web.app"
    };

    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
      .then(res => res.json())
      .then(data => window.location.href = data.payment_link);
  }

  return (
    <Button variant="contained" onClick={pay}>Pay</Button>
  )
}

export default Payment