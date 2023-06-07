import React from 'react'
import { useState } from 'react'

function Seaded() {
  const [keel, uuendaKeel] = useState( localStorage.getItem("keel") || "est" );

  const muudaKeelEE = () => {
    uuendaKeel( "est" );
    localStorage.setItem( "keel", "est" );
  }

  const muudaKeelEN = () => {
    uuendaKeel( "eng" );
    localStorage.setItem( "keel", "eng" );
  }

  const muudaKeelRU = () => {
    uuendaKeel( "rus" );
    localStorage.setItem( "keel", "rus" );
  }

  return (
    <div>
      <button onClick={muudaKeelEE}>Eesti keelseks</button>
      <button onClick={muudaKeelEN}>Inglise keelseks</button>
      <button onClick={muudaKeelRU}>Vene keelseks</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Pycckij jsõk</div>}
    </div>
  )
}

export default Seaded