import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  const { jrkNr } = useParams();
  const leitudToode = tootedFailist[jrkNr];

  return (
    <div>
      {leitudToode !== undefined && 
        <div>
          <div>Toote nimi: {leitudToode.nimi}</div>
          <div>Toote hind: {leitudToode.hind} €</div>
          <div>Toote pilt: <img src={leitudToode.pilt} alt="" />  </div>
          <div>IBAN: ...</div>
        </div>}
      {leitudToode === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode