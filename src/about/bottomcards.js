import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text
} from "@chakra-ui/react";
//underline
import line from "../images/icons/Asset 24@150x.png";

//Icons
import icon from "../images/icons/Asset 54@150x.png";

function BottomCards() {
  return (
    <div>
      <Container className="center mt-3">
        <Row className="mt-3 mb-5">
          <Col lg={4}>
            <Card>
              <Card.Body className="">
                <Card.Title className="mb-1">Heart Disease</Card.Title>
                <Image
                  src={line}
                  height="5px"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
                <Card.Text className="mt-3">
                  We check and cure the presence of enzymes and proteins, which
                  are risk factors for developing cardiovascular disease and
                  stroke.
                </Card.Text>
                <p>
                  <a href="#!" className="text-danger">
                    Read more...
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body className="">
                <Card.Title className="mb-1">Eye Health</Card.Title>
                <Image
                  src={line}
                  height="5px"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
                <Card.Text className="mt-3">
                  We check and cure the presence of enzymes and proteins, which
                  are risk factors for developing cardiovascular disease and
                  stroke.
                </Card.Text>
                <p>
                  <a href="#!" className="text-danger">
                    Read more...
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={{ display: "flex" }}>
            <Card>
              <Card.Body className="">
                <Card.Title className="mb-1">Pregnancy</Card.Title>
                <Image
                  src={line}
                  height="5px"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
                <Card.Text className="mt-3">
                  We check and cure the presence of enzymes and proteins, which
                  are risk factors for developing cardiovascular disease and
                  stroke.
                </Card.Text>
                <p>
                  <a href="#!" className="text-danger">
                    Read more...
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} style={{ display: "flex" }}>
            <Box w="100%" textAlign="center" mt="36px" mb="72px" px="12px">
              <Box display="inline-block flex" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Overall Performance"
                </Button>
              </Box>

              <Box display="inline-block" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Secure Communication"
                </Button>
              </Box>

              <Box display="inline-block" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Scalability"
                </Button>
              </Box>
            </Box>
          </Col>
          <Col lg={4} style={{ display: "flex" }}>
            <Box w="100%" textAlign="center" mt="36px" mb="72px" px="12px">
              <Box display="inline-block flex" my="12px" mx="28px">
                <Image src={icon} height="100" />
              </Box>
            </Box>
          </Col>
          <Col lg={4} style={{ display: "flex" }}>
            <Box w="100%" textAlign="center" mt="36px" mb="72px" px="12px">
              <Box display="inline-block" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Reliability"
                </Button>
              </Box>

              <Box display="inline-block" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Payment history & Plans"
                </Button>
              </Box>

              <Box display="inline-block" my="12px" mx="28px">
                <Button
                  w="212px"
                  h="36px"
                  pt="2px"
                  px="36px"
                  borderRadius="48px"
                  textAlign="center"
                  bg="rgb(0,71,171)"
                  border="1px solid rgb(0,71,171)"
                  color="white"
                  _hover={{ bg: "E74032" }}
                >
                  "Support ^ Customer care"
                </Button>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomCards;
