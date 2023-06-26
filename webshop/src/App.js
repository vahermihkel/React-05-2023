import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import { ContactUs } from './pages/global/ContactUs';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useTranslation } from 'react-i18next';

import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import EditProduct from './pages/admin/EditProduct';

function App() {

  const { t, i18n } = useTranslation();


  return (
    <div className="App">
{/* <h1>{t('Welcome to React')}</h1> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/poed">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/kontakteeru">{t("contact")}</Nav.Link>
              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/maintain-categories">{t("maintain-categories")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/maintain-shops">{t("maintain-shops")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/maintain-products">{t("maintain-products")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/add-product">{t("add-product")}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
            <button onClick={() => i18n.changeLanguage("ee")}>ee</button>
            <Nav>
              <Nav.Link as={Link} to="/ostukorv">{t("cart")}</Nav.Link>
              <Nav.Link>{t("login")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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