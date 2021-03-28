
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Text } from "@chakra-ui/react";

import slide1 from '../welcome/images/Asset 111100.png';
import slide2 from '../welcome/images/Asset 113100.png';
import slide3 from '../welcome/images/Asset 114100.png';
import slide4 from '../welcome/images/Asset 115100.png';
import slide5 from '../welcome/images/Asset 116100.png';
import slide6 from '../welcome/images/Asset 117100.png';



function Slides() {
  return (
    <div>
      <Carousel style={{color: "black"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">A truely affordable and customizable solution.</Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">Consultation everywhere. We are providing better care.</Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">Give your practice an instant web presence.</Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">Increase profitability. Increase patient care.</Text>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="white" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">A truely affordable and customizable solution.</Text>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">A truely affordable and customizable solution.</Text>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;