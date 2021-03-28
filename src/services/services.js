import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Box, Button, Image, Text } from "@chakra-ui/react";
//underline
import line from "../services/images/Asset 24@150x.png";
//main picture
import mainpic from "../services/images/Asset 112100.png";
import PageTitle from "../components/pagetitle";

function ServicesPage() {
  return (
    <div>
      <Container className="mt-5">
        <PageTitle text="our services" />
        <Row className="mt-4">
          <Col lg={6} className="p-0">
            <Card>
              <Image src={mainpic} fit="cover" height="500px" rounded />
            </Card>
          </Col>
          <Col lg={6} className="text-left">
            <Text fontSize="1.75rem">OUR SERVICES</Text>
            <Text>
              Plum Telemed offers solutions that improve health care access and
              affordability, enhance the health care experience and achieve
              better health outcomes. The following are the services that we
              offer:
            </Text>

            <Box display="inline-block flex" my={3}>
              <Button
                fontWeight="500"
                maxW="212px"
                width="150px"
                h="45px"
                marginLeft="0"
                pt="2px"
                px="36px"
                borderRadius="78px"
                textAlign="left"
                bg="rgb(0,71,171)"
                border="1px solid rgb(0,71,171)"
                color="white"
                _hover={{ bg: "E74032" }}
              >
                CLINICAL
                </Button> <p className="ml-3">
                Preventative care, diagnosis, monitoring, <br />consultations,
              surveillances, follow-up visits,<br /> second opinions and curative
              care.
            </p>
            </Box>
            <Box display="inline-block flex" my={3}>
              <Button
                fontWeight="500"
                maxW="212px"
                width="150px"
                h="45px"
                marginLeft="0"
                pt="2px"
                px="36px"
                borderRadius="78px"
                textAlign="left"
                bg="rgb(0,71,171)"
                border="1px solid rgb(0,71,171)"
                color="white"
                _hover={{ bg: "E74032" }}
              >
                NON -
                </Button>
              <p className="ml-3">
                Health promotion, continuing medical education,<br /> virtual physician
                  to physician discussions, <br />virtual provider referrals, training,
                  virtual <br />medical tourism and peer networking.
                </p>
            </Box>
            <Box display="inline-block flex" my={3}>
              <Button
                fontWeight="500"
                maxW="212px"
                width="150px"
                h="45px"
                marginLeft="0"
                pt="2px"
                px="36px"
                borderRadius="78px"
                textAlign="left"
                bg="rgb(0,71,171)"
                border="1px solid rgb(0,71,171)"
                color="white"
                _hover={{ bg: "E74032" }}
              >
                TELEMEDICINE
                </Button>
              <p className="ml-3">
                Training and technical support for telemedicine<br /> consumers
                </p>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicesPage;
