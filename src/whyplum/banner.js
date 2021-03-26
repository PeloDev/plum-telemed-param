//import "./styles.css";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text
} from "@chakra-ui/react";
//import {Jumbotron, Button, Row, Col, Image, Card} from 'react-bootstrap';
//banner
import bannerimg from "../images/banner/plum.png";

function Banner() {
  return (
    <div>
      <Box position="relative" textAlign="center">
        <Image width="100%" src={bannerimg} alt="login-banner" />
        <Box
          position="absolute"
          width="90%"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          backgroundColor="rgba(255,255,255,0.6)"
          borderRadius={48}
          padding="18px 72px"
        >
          <h3>
            "Our mission is to deliver the finest guidelines, technical
            implementations and providing innovative solutions, ensuring
            client's requirements are fulfilled beyond their expectations."
          </h3>
        </Box>
      </Box>
    </div>
  );
}

export default Banner;