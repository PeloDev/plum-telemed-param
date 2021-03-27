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
import PageBanner from "../components/pagebanner";

function Banner() {
  const text = "\"Our mission is to deliver the finest guidelines, technical implementations and providing innovative solutions, ensuring client's requirements are fulfilled beyond their expectations.\"";
  return (
    <div>
      <PageBanner text={text} image={bannerimg} />
    </div>
  );
}

export default Banner;
