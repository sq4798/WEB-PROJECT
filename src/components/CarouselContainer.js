import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/2.jpg";
import image3 from "./../assets/images/3.jpg";

const CarouselContainer = () => {
  return (
    <div className="col-10 offset-1 my-2">
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            height="491px"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image2}
            height="491px"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
