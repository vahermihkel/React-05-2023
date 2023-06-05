import React from 'react'
import { useState } from 'react'

function Seaded() {
  const [keel, uuendaKeel] = useState();

  return (
    <div>
      <button onClick={() => uuendaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => uuendaKeel("eng")}>Inglise keelseks</button>
      <button onClick={() => uuendaKeel("rus")}>Vene keelseks</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Pycckij jsõk</div>}
    </div>
  )
}

export default Seaded