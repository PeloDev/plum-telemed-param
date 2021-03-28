
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Button, Text } from "@chakra-ui/react";

import slide1 from '../welcome/images/Asset 111100.png';
import slide2 from '../welcome/images/Asset 113100.png';
import slide3 from '../welcome/images/Asset 114100.png';
import slide4 from '../welcome/images/Asset 115100.png';
import slide5 from '../welcome/images/Asset 116100.png';
import slide6 from '../welcome/images/Asset 117100.png';



function Slides() {
  return (
    <div>
      <Carousel style={{ color: "black" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">A truely affordable and customizable solution.</Text>
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
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
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
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
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
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
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Text fontSize="1.75rem" color="black" fontWeight={500}>PlumTelemed <div />Save Time & Money</Text>
            <Text color="black">A truely affordable and customizable solution.</Text>
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
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
            <Button
              mt="12px"
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="78px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ bg: "E74032" }}
            >
              {"Learn More >"}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;