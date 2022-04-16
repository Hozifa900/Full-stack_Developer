import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">SHOPE</Nav.Link>
              <Nav.Link href="#">OUR STORY</Nav.Link>
              <Nav.Link href="#">EXPERTISE</Nav.Link>
            </Nav>
            <Nav style={{ marginRight: "250px" }}>
              <img
                src="./assets/img/logo.png"
                style={{ width: "150px", height: "70px" }}
              />
            </Nav>

            <Nav>
              <div style={{ marginLeft: "100px" }}>
                <label style={{ color: "#b1b1b1", fontSize: "14px" }}>
                  CONTACT
                </label>
                <img
                  style={{ marginLeft: "10px" }}
                  src="./assets/icons/search.svg"
                />
                <img
                  style={{ marginLeft: "10px" }}
                  src="./assets/icons/person.svg"
                />
                <img
                  style={{ marginLeft: "10px" }}
                  src="./assets/icons/cart3.svg"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
