import React from 'react'
import { Link } from "react-router-dom"; // npm install react-router-dom

function Ostukorv() {
  return (
    <div>
      <div>Tooteid ei ole</div> <Link to="/lisa-toode">Mine tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv