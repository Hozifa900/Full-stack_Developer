import { Container, Row, Col, Button, Card } from "react-bootstrap";
function Priority() {
  return (
    <div style={{ backgroundColor: "#f1f0ec" }}>
      <br />

      <Container>
        <br />
        <br />
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <center>
          <font style={{ fontSize: "22px" }}>
            Your Comfort Is Our #1 Priorit
          </font>
        </center>
        <br />
        <br />
        <center>
          <Row style={{ justify: "center", width: "70%" }}>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0px",
                  backgroundColor: "#f1f0ec",
                }}
              >
                <Card.Img variant="top" src="./assets/img/4.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "14px",
                    }}
                  >
                    Quality products
                  </label>
                  <br />
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    Lorem ipsum dolor sit amet,
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    consectetur adipiscing elit, sed do
                  </label>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0px",
                  backgroundColor: "#f1f0ec",
                }}
              >
                <Card.Img variant="top" src="./assets/img/5.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "14px",
                    }}
                  >
                    Lifetime Warranty
                  </label>
                  <br />
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    Lorem ipsum dolor sit amet,
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    consectetur adipiscing elit, sed do
                  </label>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0px",
                  backgroundColor: "#f1f0ec",
                }}
              >
                <Card.Img variant="top" src="./assets/img/6.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "14px",
                    }}
                  >
                    Strees-free Shopping
                  </label>
                  <br />
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    Lorem ipsum dolor sit amet,
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    consectetur adipiscing elit, sed do
                  </label>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={3}
              style={{
                height: "40vh",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0px",
                  backgroundColor: "#f1f0ec",
                }}
              >
                <Card.Img variant="top" src="./assets/img/7.png" />
                <Card.Body>
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "14px",
                    }}
                  >
                    Fair Prices
                  </label>
                  <br />
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    Lorem ipsum dolor sit amet,
                  </label>
                  <br />
                  <label
                    style={{
                      marginLeft: "-15px",
                      fontSize: "12px",
                      color: "#868686",
                    }}
                  >
                    consectetur adipiscing elit, sed do
                  </label>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </center>
      </Container>
      <br />
      <br />
    </div>
  );
}
export default Priority;
