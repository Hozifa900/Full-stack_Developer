import {
  Container,
  Row,
  Col,
  Button,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Container>
        <center>
          <Row>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <label style={{ float: "left", color: "#737373" }}>
                OUR STORY
              </label>
              <br />
              <br />
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Lorem ipsum dolor sit amet, consectetr
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                adipiscing elit, sed do eiusmod tempor
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                incididunt ut labore et dolore magna aliqua
              </label>
              <br />
              <br />
              <img
                style={{ float: "left", marginRight: "20px" }}
                src="./assets/icons/facebook.svg"
              />
              <img
                style={{ float: "left", marginRight: "20px" }}
                src="./assets/icons/twitter.svg"
              />
              <img
                style={{ float: "left", marginRight: "20px" }}
                src="./assets/icons/instagram.svg"
              />
              <br />
              <br />
              <br />
              <br />
              <div style={{ float: "left", color: "#b1b1b1" }}>
                &#169; 2020 BLAUCHE
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <label style={{ float: "left", color: "#737373" }}>MORE..</label>
              <br />
              <br />
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                About Us
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Contact Us
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Track My Order
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                FAQ
              </label>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <label style={{ float: "left", color: "#737373" }}>SHOP</label>
              <br />
              <br />
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Bed Linen
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Bath Towels
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Bathrobes
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Home Fragrances
              </label>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <label style={{ float: "left", color: "#737373" }}>
                NEWSLETTER
              </label>
              <br />
              <br />
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                Subscribe to receive updates. access to
              </label>
              <br />
              <label
                style={{ float: "left", fontSize: "14px", color: "#b1b1b1" }}
              >
                exclusive deal, and more.
              </label>
              <br />
              <br />
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
}
export default Footer;
