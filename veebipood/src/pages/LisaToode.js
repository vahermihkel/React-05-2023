import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  //function lisa() {}

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega sisestada!");
    } else {
      uuendaSonum("Toode lisatud: " + nimiRef.current.value);
    // document.getElementById("name").value
      tootedFailist.push(
        {
          "nimi": nimiRef.current.value, 
          "hind": Number(hindRef.current.value), 
          "aktiivne": aktiivneRef.current.checked, 
          "pilt": piltRef.current.value
        }
      );
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" />  <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" />  <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" />  <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" />  <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode