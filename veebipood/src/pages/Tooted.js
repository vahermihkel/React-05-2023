import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    // lisama Ostukorv.js lehele ühe toote juurde
    // useState sulgude sisse 1 juurde
    ostukorvFailist.push(klikitudToode);
  }

  return (
    <div>
      {tooted.map((toode, indeks) =>
        <div key={indeks}>
          <Link to={"/toode/" + indeks}>
            {toode}
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> 
        </div>)}
    </div>
  )
}

export default Tooted