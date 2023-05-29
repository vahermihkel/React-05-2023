import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

// Navigeerimiseks ehk URLde vaheliseks liikumiseks on Reactis vaja:
// 1. npm install react-router-dom
// 2. index.js failis BrowserRouter kasutuselevõtt (+ import)
// 3. app.js failis Route-de ja sisu seoste defineerimine

function App() {

  return (
    <div className="App">
      <img className="pilt" src="https://img12.img-bcg.eu/auto24/news/770/469/130299469.jpg" alt="" />
      <button className="nupp">Nupp</button>

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
