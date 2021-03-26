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
import bannerimg from "../images/banner/contact.png";

function Banner() {
  return (
    <div>
      <Box position="relative" textAlign="center">
        <Image width="100%" src={bannerimg} alt="login-banner" />
        <Box
          width="90%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          backgroundColor="rgba(255,255,255,0.6)"
          borderRadius={48}
          padding="18px 72px"
        >
          <h3>Login with PlumTelemed and avail great membership plans!!!</h3>
        </Box>
      </Box>
    </div>
  );
}

export default Banner;
