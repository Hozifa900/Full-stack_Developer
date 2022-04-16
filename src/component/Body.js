import About from "./About";
import SlideShow from "./SlideShow";
import BestSellers from "./BestSellers";
import Priority from "./Priority";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
function Body() {
  return (
    <div>
      <SlideShow />
      <About />
      <BestSellers />
      <Priority />
      <Testimonials />
      <Portfolio />
    </div>
  );
}
export default Body;
