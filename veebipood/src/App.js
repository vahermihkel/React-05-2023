import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import NotFound from './pages/NotFound';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';

// Navigeerimiseks ehk URLde vaheliseks liikumiseks on Reactis vaja:
// 1. npm install react-router-dom
// 2. index.js failis BrowserRouter kasutuselevõtt (+ import)
// 3. app.js failis Route-de ja sisu seoste defineerimine

// tumesinine - JavaScriptis sissekirjutatud definitsioonid
//               function, const, let, var, true, false, undefined, null
//              HTMLs sissekirjutatud definitsioonid
//              <div>  <input/>   <p>   <img/>   <h1>   <button>  
// sinine     - JavaScripti muutuja
// helesinine - JavaScriptis sissekirjutatud omadus (võti)
//              .current.value       .length       .getItem    .stringify
//              JavaScriptis sissekirjutatud omadus (atribuut)
//         className    src    type   alt   to    path    element  onClick
// roheline (suure tähega) - HTMLs imporditud klass, peab omama üleval ka importi
//      <Page />    <Avaleht />   <Ostukorv />    <Link>     <Route />
//               JS: new Date()
// punane     -  jutumärkides väärtus
// lillakas   -  return, import, export, if, else
// roheline   - kommentaar
// kollane    - funktsioon
// valge      - märgid, väljakuvamised
// {{{{{{{{{{{}}}}}}}}}}}
// [[[[[[[[[[]]]]]]]]]]
// (((((((((((())))))))))))

function App() {
  const [veebileht, uuendaVeebileht] = useState(localStorage.getItem("theme") || "hele");

  const muudaVeebilehtTume = () => {
    uuendaVeebileht("tume");
    localStorage.setItem("theme", "tume");
  }

  const muudaVeebilehtHele = () => {
    uuendaVeebileht("hele");
    localStorage.setItem("theme", "hele");
  }

  return (
    <div className={veebileht}>
      <Link to="/">
        <img className="pilt" src="https://img12.img-bcg.eu/auto24/news/770/469/130299469.jpg" alt="" />
      </Link>

      {veebileht === "hele" && <button onClick={muudaVeebilehtTume}>Dark mode</button>}
      {veebileht === "tume" && <button onClick={muudaVeebilehtHele}>Light mode</button>}

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* <p></p>
      <h2></h2>
      <h1></h1>
      <div></div>
      <button></button> */}

      {/* <img src="" alt="" />
      <input type="text" /> */}

    </div>
  );
}

export default App;
