import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([123, 11, 22, 3123, 44, 91, 8, 72]);
  const [kokku, uuendaKokku] = useState(0);

  const suuremani = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const vaiksemadKui100 = () => {
    const tulem = hinnad.filter(hind => hind < 100);
    uuendaHinnad(tulem);
  }

  const arvutaHinnadKokku = () => {
    let hinnadKokku = 0;   // let ---> saame korduvalt väärtust anda võrdusmärgiga
    hinnad.forEach(hind => hinnadKokku = hinnadKokku + hind);
    //hinnad.forEach(hind => hinnadKokku += hind);
    uuendaKokku(hinnadKokku);
  }

  return (
    <div>
      <button onClick={suuremani}>Sorteeri väiksemast suuremani</button>
      <button onClick={vaiksemadKui100}>Jäta alles hinnad väiksemad kui 100</button>
      {hinnad.map((hind, jrkNr) => <div key={jrkNr}>{hind}</div>)}
      <div>Kokku: {kokku} €</div>
      <button onClick={arvutaHinnadKokku}>Arvuta uuesti kokku</button>
    </div>
  )
}

export default Hinnad