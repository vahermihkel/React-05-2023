import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(7);
  const [laigitud, uuendaLaigitud] = useState(false); // kas_on    kas_ei_ole    false / true
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      { laigitud === true && <img src="/laigitud.svg" alt="" />}
      { laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud}
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>
      <br /><br />
      <div>{sonum}</div>
      <button onClick={nulli}>Tagasi nulli</button>
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

// const isMinusEnabled = (kogus) => kogus === 0;
// <button disabled={isMinusEnabled(kogus)} onClick={vahenda}></button>

export default Avaleht