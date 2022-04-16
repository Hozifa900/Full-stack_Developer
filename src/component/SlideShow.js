import { Carousel } from "react-bootstrap";
function SlideShow() {
  return (
    <div>
      <Carousel className="carou">
        <Carousel.Item interval={4000} className="img">
          <img className="img" src="./assets/img/slideshow.png" />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img className="img" src="./assets/img/2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3 color="green"></h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img className="img" src="./assets/img/5.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img className="img" src="./assets/img/8.webp" alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SlideShow;
