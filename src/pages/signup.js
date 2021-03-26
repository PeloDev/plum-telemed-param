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
import { Row, Col } from "react-bootstrap";
import line from "../images/line/Asset 24@150x.png";
import slide5 from "../welcome/images/Asset 116100.png";
import patientIcon from "../images/icons/Asset 30@150x.png";
import healthcareIcon from "../images/icons/Asset 92@150x.png";
import Footer from '../footer/footer';

function SignUp() {
  return (
    <>
      <Box position="relative" textAlign="center">
        <Image width="100%" src={slide5} alt="login-banner" />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          backgroundColor="rgba(255,255,255,0.6)"
          borderRadius={48}
          padding="18px 72px"
        >
          <h3>Sign up with PlumTelemed and avail great membership plans!!!</h3>
        </Box>
      </Box>
      <Row style={{ margiTop: "12px" }}>
        <Col className="center">
          <h3 style={{ textAlign: "center" }}>SIGN UP</h3>
          <Image
            src={line}
            height="5"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <Center textAlign="center" my="18px">
            <Text fontWeight={500} fontSize="20px">
              ARE YOU?
            </Text>
          </Center>
        </Col>
      </Row>
      <Flex pb="36px">
        <Spacer />
        <Box
          flex={1}
          backgroundColor="#DDD"
          _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
          borderRadius={30}
          minW="300px"
          padding="2%"
          pb="12px"
        >
          <Center>
            <Image my="12px" h="64px" src={patientIcon} />
          </Center>
          <Center textAlign="center">
            <Text fontWeight={600} fontSize="20px">
              Patient
            </Text>
          </Center>
          <Center textAlign="center">
            <Text fontSize="18px">I am looking for my health & well being</Text>
          </Center>
        </Box>
        <Box w="36px" />
        <Box
          flex={1}
          backgroundColor="#DDD"
          _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
          borderRadius={30}
          minW="300px"
          padding="2%"
          pb="12px"
        >
          <Center>
            <Image my="12px" h="64px" src={healthcareIcon} />
          </Center>
          <Center textAlign="center">
            <Text fontWeight={600} fontSize="20px">
              Healthcare Provider
            </Text>
          </Center>
          <Center textAlign="center">
            <Text fontSize="18px">
              I am looking for the health & well being of others
            </Text>
          </Center>
        </Box>
        <Spacer />
      </Flex>
      <Footer />
    </>
  );
}

export default SignUp;
