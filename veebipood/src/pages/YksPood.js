import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from "../data/poed.json";

function YksPood() {
  const { poeNimetus } = useParams();
                    //    "Ülemiste" =>  "Ülemiste" === TULI URL-st
                    //    "Viimsi" =>  "Viimsi" === TULI URL-st
                    //    "Rocca al Mare" =>  "Rocca al Mare" === "Rocca al Mare"

                    //    "Object object" =>  "Object object".nimi === TULI URL-st
                    //    "Object object" =>  "Viimsi" === TULI URL-st
                    //    "Object object" =>  "Rocca al Mare" === "Rocca al Mare"
  const leitudPood = poedFailist.find(e => e.nimi === poeNimetus);

   // useState, useRef, useParams
  // Reacti Hookid - see tähendab Reacti erikood, millega on võimalik
  //      tegevusi teha efektiivsemalt ja Reactile sobilikumalt
  // Hookide reeglid:
  // 1. ees on muutuja ehk pean kasutama "const" eesliidest
  // 2. kõik Hookid pean importima
  // 3. kõikidel Hookidel on sulud lõpus const inputiLuger = useRef();
  //              const [sonum, uuendaSonum] = useState("Alg");
  // 4. Hooki ei saa dünaamiliselt luua (ehk if else abiga)
  // 5. Hooki ei saa luua ka funktsiooni sees
  // useSuperPower() <--- loob lihtsa tegevuse

  return (
    <div>
     { leitudPood !== undefined &&
      <div>
          <div>Poe nimetus: { leitudPood.nimi }</div>
          <div>Poe lahtiolekuaeg: { leitudPood.aeg }</div>
          <div>Poe aadress: { leitudPood.aadress }</div>
          <div>Poe telefon: { leitudPood.tel }</div>
      </div>}
      
      { leitudPood === undefined && <div>Poodi ei leitud!</div> }

      {/* { leitudPood ?
        <div>
            <div> Poed nimetus: { leitudPood }</div>
            <div>Poe lahtiolekuaeg: ......</div>
            <div>Poe aadress: ......</div>
            <div>Poe telefon: ......</div>
        </div> : 
        <div>Poodi ei leitud!</div>
      } */}
    </div>
  )
}

export default YksPood