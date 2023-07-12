import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  return (
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
            <img className="lang" src="/english.png" alt="" onClick={() => i18n.changeLanguage("en")} />
            <img className="lang" src="/estonian.png" alt="" onClick={() => i18n.changeLanguage("ee")} />
            <Nav>
              <Nav.Link as={Link} to="/ostukorv">{t("cart")}</Nav.Link>
              <Nav.Link>{t("login")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavigationBar