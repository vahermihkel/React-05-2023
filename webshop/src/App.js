import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import { ContactUs } from './pages/global/ContactUs';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';

import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import EditProduct from './pages/admin/EditProduct';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
{/* <h1>{t('Welcome to React')}</h1> */}
      <NavigationBar />

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="ostukorv" element={ <Cart /> } />
        <Route path="poed" element={ <Shops /> } />
        <Route path="kontakteeru" element={ <ContactUs /> } />
        <Route path="toode" element={ <SingleProduct /> } />

        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// TypeScript
// https://www.npmjs.com/package/react-query
// useMutation
// context

// redux ---> ei vaata

// 03.07 kaardirakendus (Leaflet), kategooriad dropdownist, kategooriad avalehel, pakiautomaadid ostukorvis
// 05.07: ostukorv kogustega, ostukorvi kujundus
// 10.07: makse: API päringu (EveryPay)
// 12.07: CSS module, Components loogikat, MUI
// Context - globaalne muutuja

// 18 kohtumist