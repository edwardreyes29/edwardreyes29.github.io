import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
const ProjectCarousel = ({ images }) => {
  return (
    <Carousel interval={3000}>
      {images.map(image => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
export default ProjectCarousel;