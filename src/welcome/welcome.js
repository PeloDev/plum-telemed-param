
import React from 'react';
import {Carousel} from 'react-bootstrap';
import { Text } from "@chakra-ui/react";

import slide1 from '../welcome/images/Asset 111100.png';
import slide2 from '../welcome/images/Asset 113100.png';
import slide3 from '../welcome/images/Asset 114100.png';
import slide4 from '../welcome/images/Asset 115100.png';
import slide5 from '../welcome/images/Asset 116100.png';
import slide6 from '../welcome/images/Asset 117100.png';


  
function Slides() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>First slide label</Text>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>Second slide label</Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>Third slide label</Text>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>Fourth slide label</Text>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>Firth slide label</Text>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" fontWeight={500}>Sixth slide label</Text>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
  
export default Slides;