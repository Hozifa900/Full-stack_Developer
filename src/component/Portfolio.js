import { Container, Row, Col, Button, Card } from "react-bootstrap";
function Portfolio() {
  return (
    <div>
      <Container fluid>
        <center>
          <Row>
            <Col
              xs={12}
              md={3}
              style={{
                backgroundImage: 'url("./assets/img/9.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
              }}
            ></Col>
            <Col
              xs={12}
              md={3}
              style={{
                backgroundImage: 'url("./assets/img/10.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
              }}
            ></Col>
            <Col
              xs={12}
              md={3}
              style={{
                backgroundImage: 'url("./assets/img/11.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
              }}
            ></Col>
            <Col
              xs={12}
              md={3}
              style={{
                backgroundImage: 'url("./assets/img/12.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
              }}
            ></Col>
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
export default Portfolio;
