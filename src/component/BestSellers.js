import { Container, Row, Col, Button, Card } from "react-bootstrap";
function BestSellers() {
  return (
    <div /* className="About" */ /* style={sty2} */>
      <br />

      <Container>
        <br />
        <br />
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <center>
          <font
            style={{ fontSize: "22px", color: "#737373", fontFamily: "math" }}
          >
            Best Sellers
          </font>
        </center>
        <br />
        <br />
        <center>
          <Row style={{ justify: "center", width: "70%" }}>
            <Col
              xs={12}
              md={4}
              style={{
                height: "40vh",
              }}
            >
              <Card style={{ width: "100%", height: "100%", border: "0px" }}>
                <Card.Img variant="top" src="./assets/img/1.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    Product Name
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    AED XXX
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "12px",
                      color: "#b1b1b1",
                    }}
                  >
                    Available in 5 color
                  </label>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{
                height: "40vh",
              }}
            >
              <Card style={{ width: "100%", border: "0px" }}>
                <Card.Img variant="top" src="./assets/img/2.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    Product Name
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    AED XXX
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "12px",
                      color: "#b1b1b1",
                    }}
                  >
                    Special Offer Get 25% OFF
                  </label>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{
                height: "40vh",
              }}
            >
              <Card style={{ width: "100%", border: "0px" }}>
                <Card.Img variant="top" src="./assets/img/3.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    Product Name
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    AED XXX
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      float: "left",
                      fontSize: "12px",
                      color: "#b1b1b1",
                    }}
                  >
                    Available in 3 color
                  </label>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </center>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default BestSellers;
