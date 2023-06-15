import React, { useState } from 'react'
import { Link } from "react-router-dom"; // npm install react-router-dom
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {                          
  const [ostukorv, uuendaOstukorvi] = useState(ostukorvFailist);

  const tyhjenda = () => {
    //ostukorvFailist = [];  <---- tekitab uue mälukoha, 
    // sest iga kord kui annan võrdusmärgiga uue väärtuse, tekib uus mälukoht
    ostukorvFailist.splice(0);
    uuendaOstukorvi([]);
    //uuendaOstukorvi(ostukorvFailist.slice());
  }

  const kustuta = (number) => {
    // kustutamiseks, kus ütlen esimese numbriga mitmendat ma kustutan, teise numbriga mitu tk alates selles
    ostukorvFailist.splice(number, 1);
    uuendaOstukorvi(ostukorvFailist.slice());
    //uuendaOstukorvi([...ostukorv]);
  }

  const lisa = (lisatavToode) => {
    ostukorvFailist.push(lisatavToode);
    uuendaOstukorvi(ostukorvFailist.slice());
  }

  return (
    <div>
      <div>Ostukorvis on {ostukorv.length} eset</div>
      {ostukorv.length === 0 &&
        <div>
          <div>Tooteid ei ole</div> <Link to="/lisa-toode">Mine tooteid lisama</Link>
        </div>}
      <br />
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.map((el, number) => 
        <div key={number}>
          {el} 
          <button onClick={() => kustuta(number)}>x</button> 
          <button onClick={() => lisa(el)}>+</button>
        </div>)}
    </div>
  )
}

export default Ostukorv