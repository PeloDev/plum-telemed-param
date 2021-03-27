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
import bannerimg from "../images/banner/about.png";
import PageBanner from "../components/pagebanner";

function Banner() {
  const text = "\" We exist to offer a multilayer telemedicine platform that enables healthcare practitioners to thrive and patients to access reliable medical care whilst creating rewarding careers for our people, generating a reasonable return for our share-holders and protecting the earth. \"";
  return (
    <div>
      <PageBanner text={text} image={bannerimg} />
    </div>
  );
}

export default Banner;
