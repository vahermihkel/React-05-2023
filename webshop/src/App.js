import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import ContactUs from './pages/global/ContactUs';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import EditProduct from './pages/admin/EditProduct';

function App() {
  return (
    <div className="App">
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/poed">Poed</Nav.Link>
              <Nav.Link as={Link} to="/kontakteeru">Kontakteeru</Nav.Link>
              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/maintain-categories">Halda kategooriaid</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/maintain-shops">
                  Halda poode
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/maintain-products">Halda tooteid</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/admin/add-product">
                  Lisa toode
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
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
        <Route path="admin/edit-product" element={ <EditProduct /> } />
        
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
