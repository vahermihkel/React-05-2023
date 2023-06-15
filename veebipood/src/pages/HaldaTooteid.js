import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooteid() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index,1); 
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      <div>{tooted.length} tk</div>
      {tooted.map((element, ix) => 
        <div key={ix}>
          {element}
          <button onClick={() => kustuta(ix)}>Kustuta</button>
          <Link to={"/muuda/" + ix}>
            <button>Muuda</button>
          </Link>
        </div> )}
    </div>
  )
}

export default HaldaTooteid