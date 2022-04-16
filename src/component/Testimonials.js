import { Container, Row, Col, Button } from "react-bootstrap";
function Testimonials() {
  return (
    <div /* className="Tistimonials" */ /* style={sty2} */>
      <br />

      <Container>
        <br />
        <br />
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <center>
          <img src="./assets/icons/star-fill.svg" />
          <img src="./assets/icons/star-fill.svg" />
          <img src="./assets/icons/star-fill.svg" />
          <img src="./assets/icons/star-fill.svg" />
          <img src="./assets/icons/star-fill.svg" />
          <br />
          <br />
          <label> "This is the best towel set I've ever had: it's cool.</label>
          <br />
          <label>comfortable and aesthetically perfect."</label>
          <br />
          <br />
          <label
            style={{ color: "#737373", borderBottom: "1px solid #737373" }}
          >
            READ TESTIMONIALS
          </label>
          <br />
          <br />
          <br />
          <br />
          <label style={{ color: "#737373", margin: "10px" }}>
            FOLLOW US ON{" "}
          </label>
          <img src="./assets/icons/instagram.svg" />
        </center>
        <br />
      </Container>
    </div>
  );
}
export default Testimonials;
