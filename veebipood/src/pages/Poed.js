import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json";
import { Link } from 'react-router-dom';

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);
  const [kokku, uuendaKokku] = useState(0);

  const reset = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort();
    poed.sort((a, b) => a.nimi.localeCompare(b.nimi)); // .sort() tühjadega on default sorteerimine ehk paneb sõnad A-Z järjekorda
    uuendaPoed(poed.slice()); // teeme koopia -> kustutame mälukoha ehk pärinevuse
    //uuendaPoed([...poed]); // teeme koopia -> kustutame mälukoha ehk pärinevuse
  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi)); // kui tegemist ei ole default sorteerimisega, pean sulgude sisu täitma
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a, b) => a.nimi.length - b.nimi.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a, b) => b.nimi.length - a.nimi.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {          //        012          012       012   
    poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2])); //    Ülemiste     Viimsi    Rocca al Mare
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poed.filter(e => e.nimi.endsWith("e"));
    uuendaPoed(vastus);
  }

  const filtreeriTahedVahemalt7 = () => {
    const vastus = poed.filter(e => e.nimi.length >= 7);
    uuendaPoed(vastus);
  }

  const filtreeriTahedTapselt9 = () => {
    const vastus = poed.filter(e => e.nimi.length === 9);
    uuendaPoed(vastus);
  }

  const filtreeriKesSisaldabIs = () => {
    const vastus = poed.filter(e => e.nimi.includes("is"));
    uuendaPoed(vastus);
  }

  const filtreeriKellelKolmasTahtI = () => {
    const vastus = poed.filter(e => e.nimi[2] === "i");
    uuendaPoed(vastus);
  }

  const arvutaTahedKokku = () => {
    let tahedKokku = 0;   // let ---> saame korduvalt väärtust anda võrdusmärgiga
    // Ülemiste, Viimsi, Rocca al Mare
    //     8     =  0 + 8
    //    14     =  8 + 6
    //    30     = 14 + 16
    poed.forEach(pood => tahedKokku = tahedKokku + pood.nimi.length);
    //hinnad.forEach(hind => hinnadKokku += hind);
    uuendaKokku(tahedKokku);
  }

  const poodViide = useRef(); // useRefist import!, ref ---> reference
  const aegViide = useRef();
  const telefonViide = useRef();
  const aadressViide = useRef();

  const lisa = () => {
    poedFailist.push( 
      { 
        "nimi": poodViide.current.value,     
        "aeg": aegViide.current.value, 
        "tel": telefonViide.current.value, 
        "aadress": aadressViide.current.value 
      }
    );
    uuendaPoed(poedFailist.slice());
  }

  return (
    <div>
      <label>Poe nimi</label> <br />
      <input ref={poodViide} type="text" /> <br />
      <label>Poe lahtiolekuaeg</label> <br />
      <input ref={aegViide} type="text" /> <br />
      <label>Poe telefon</label> <br />
      <input ref={telefonViide} type="text" /> <br />
      <label>Poe aadress</label> <br />
      <input ref={aadressViide} type="text" /> <br />
      <button onClick={lisa}>Lisa pood</button> <br />

      <button onClick={arvutaTahedKokku}>Arvuta uuesti kokku</button>
      <div>Kokku: {kokku} tähte</div>
      <button onClick={reset}>Reset filters</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arvu järgi kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arvu järgi kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi A-Z</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Jäta alles e'ga lõppevad</button>
      <button onClick={filtreeriTahedVahemalt7}>Jäta kellel 7 või rohkem tähte</button>
      <button onClick={filtreeriTahedTapselt9}>Jäta kellel 9 tähte</button>
      <button onClick={filtreeriKesSisaldabIs}>Jäta kellel on sõnaühend "is"</button>
      <button onClick={filtreeriKellelKolmasTahtI}>Jäta kellel on kolmas täht "i"</button>

      {poed.map((yksPood, index) =>
        <div key={index}>
          {yksPood.nimi} <Link to={"/pood/" + yksPood.nimi}>Vaata detailsemalt</Link>
        </div>
      )}
      {/* <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
    </div>
  )
}

export default Poed