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

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice()); // React ei näe et oleks midagi muutunud
    //uuendaTooted([...tooted]); // see on täpselt sama, ChatGPT / OpenAI annab seda varianti
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      {tooted.map((toode, indeks) =>
        <div key={indeks}>
          <Link to={"/toode/" + indeks}>
            {toode.nimi} - {toode.hind} €
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> 
        </div>)}
    </div>
  )
}

export default Tooted