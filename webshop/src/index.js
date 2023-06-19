import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'; // miks bootstrap ülespoole kui index.css? 
// siis saan vajadusel üle kirjutada, sest koodis kui midagi on allpool, siis see kehtib
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


