import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  //function lisa() {}

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega sisestada!");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
    // document.getElementById("name").value
      tootedFailist.push(inputiLuger.current.value);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" />  <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode