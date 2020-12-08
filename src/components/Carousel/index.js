import React from "react";
import {useState} from "react";
import "./styles.css"
import Carousel from 'react-bootstrap/Carousel';
import astronaut from "../Assets/Images/astronaut.JPG"
import skydiving from "../Assets/Images/skydiving.JPG"
import surf from "../Assets/Images/surf.JPG"


// import "./style.css";
        
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={astronaut}
          alt="OMSI"
        />
        <Carousel.Caption>
          <h3>OMSI Portland OR</h3>
          <p>Enjoying Space education at OMSI.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={skydiving}
          alt="skydiving"
        />

        <Carousel.Caption>
          <h3>Skydiving Midwest USA</h3>
          <p>Blowing off some steam after a long week in the mines.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={surf}
          alt="surf"
        />

        <Carousel.Caption>
          <h3>Oregon Coast OR Surf</h3>
          <p>
            Surfing some November breaks on the OR coast.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;