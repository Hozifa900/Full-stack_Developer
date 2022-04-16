import { Container, Row, Col, Button } from "react-bootstrap";
function About() {
  return (
    <div /* className="About" */ /* style={sty2} */>
      <br />

      <Container>
        <br />
        <br />
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <center style={{ color: "#737373" }}>
          Our premium products got the finest quality cotton that create an
          exquisite lightwight
          <br />
          textile that's both soft and crisp - guaranteed to give you a
          wonderful night's sleep.
        </center>
        <br />
        <br />
        <center>
          <Row style={{ justify: "center", width: "70%" }}>
            <Col
              xs={12}
              md={6}
              style={{
                backgroundImage: 'url("./assets/img/9.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Button
                btn="light"
                bg="light"
                variant="light"
                style={{
                  borderRadius: "0px",
                  marginBottom: "50px",
                  width: "200px",
                }}
              >
                Shop Bed Linens
              </Button>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                backgroundImage: 'url("./assets/img/10.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Button
                btn="light"
                bg="light"
                variant="light"
                style={{
                  borderRadius: "0px",
                  marginBottom: "50px",
                  width: "200px",
                }}
              >
                Shop Bath Towels
              </Button>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                backgroundImage: 'url("./assets/img/11.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Button
                btn="light"
                bg="light"
                variant="light"
                style={{
                  borderRadius: "0px",
                  marginBottom: "50px",
                  width: "200px",
                }}
              >
                Shop Bath Robes
              </Button>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                backgroundImage: 'url("./assets/img/12.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Button
                btn="light"
                bg="light"
                variant="light"
                style={{
                  borderRadius: "0px",
                  marginBottom: "50px",
                  width: "200px",
                }}
              >
                Shop Home Fragrances
              </Button>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
}
export default About;
