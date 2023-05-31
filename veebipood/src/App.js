import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

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

  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://img12.img-bcg.eu/auto24/news/770/469/130299469.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
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
