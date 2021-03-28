
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import line from '../images/line/Asset 24@150x.png';
import icon1 from '../images/icons/features/main.png';
import icon2 from '../images/icons/features/main.png';
import icon3 from '../images/icons/features/main.png';
import {
  Box,
  Button,
  Center,
  Image,
  Text
} from "@chakra-ui/react";
import PageTitle from '../components/pagetitle';


function GenCol() {
  return (
    <div>
      <Container className="mt-4 mb-4">
        <PageTitle text="FEATURES GENERIC" />
        <Row className="mt-4 flex">
          <Col className="text-left pr-4" >
            <Text fontSize="20px" fontWeight="500" mb={1}>USER PROFILE</Text>
            <Text mb={4}>
              Our user profile is an essential element displaying
              user’s data: a picture (optional), address,
              gender, location, time zone, email,
              phone number, and alternative numbers for
              account setting or emergency. It also displays
              the history of visits and the calendar
              of scheduled appointments.
                </Text>
            <Button
              maxW="212px"
              mb="0px"
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
              Learn More
                  </Button>
          </Col>
          <vl />
          <Col className="text-left pl-4 pr-4">

            <Text fontSize="20px" fontWeight="500" mb={1}>PATIENT WEB/MOBILE PANEL</Text>
            <Text mb={4}>
              Plum Telemed’s patient web includes the
              panel of doctor’s services with the list of
              health conditions subject to treatment and
              the form for scheduling appointments. The
              set of tabbed pages includes medical,
              mental, and family health history, lifestyle
              page, payment methods, settings, and patient
              activity on the platform.
                </Text>
            <Button
              maxW="212px"
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
              Learn More
                  </Button>
          </Col>
          <vl />
          <Col className="text-left pl-4">
            <Text fontSize="20px" fontWeight="500" mb={1}>GEOLOCATION</Text>
            <Text mb={4}>
              Plum Telemed’s application is designed for
              patients to avoid travels. For this reason, it
              requests the user’s geolocation to find
              pharmacies and hospitals nearby, give directions,
              and set approximate time of arrival
              to the selected destination.
                </Text>
            <Button
              maxW="212px"
              m="0px"
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
              Learn More
                  </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 text-left">
        <PageTitle text="COMMUNICATION METHODS" align="left" />
        <p className="mt-3">To ensure control of treatment and real-time communication, Plum Telemed’s focus is to integrate the following:
        </p>
        <Row className="">
          <Col classNAme="mr-0">
            <Box minW="200px" margin="0" >
              <Box
                backgroundColor=""
                borderRadius={30}
                margin=""
                minW="200px"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon1} h="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={500} fontSize="16px">
                      In-app chat option
                    </Text>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col classNAme="ml-0 mr-0">
            <Box minW="200px" margin="0" >
              <Box
                backgroundColor=""
                borderRadius={30}
                margin=""
                minW="200px"

                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon2} h="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={500} fontSize="16px">
                      In-app calling
                    </Text>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col classNAme="ml-0">
            <Box minW="200px" margin="0" >
              <Box
                backgroundColor=""
                borderRadius={30}
                margin=""
                minW="200px"

                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon3} h="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={500} fontSize="16px">
                      Live video sessions
                    </Text>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
        <p className="mt-4">
          The task for our development team has been to build an easy-to-use messenger with file
          sharing, audio, and video
          support to keep a high quality of files sent and provide a smooth connection.
            </p>
        <PageTitle text="REMOTE PATIENT MONITORING (RPM)" align="left" />
        <p className="mt-3">To ensure control of treatment and real-time communication, Plum Telemed’s focus is to integrate the following:</p>
        <p className="mt-3">This involves the remote patient monitoring (RPM) to help patients and physicians keep medical records and
        guide health programs or manage conditions that require, for instance, cholesterol or glucose monitoring, etc. to
        improve their quality of life.
              </p>
      </Container>
      <Container className="mt-4 mb-4">
        <PageTitle text="GENERIC CONT’D" />
        <Row className="mt-4">
          <Col lg={4} className="text-left pr-5" style={{ marginLeft: 'auto' }}>
            <Text fontSize="20px" fontWeight="500" mb={1}>SYMPTOM CHECKER</Text>
            <Text mb={4}>
              Our symptom checker works as an auxiliary
              program that helps a patient define their
              symptoms and answer questions concerning
              their current general condition. Based
              on the data entered, the program suggests
              the list of possible diagnoses, but only a
              physician makes a final decision.
            </Text>
            <Button
              maxW="212px"
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
              Read More
                  </Button>
          </Col>
          <vl />
          <Col lg={4} className="text-left pl-5" style={{ marginRight: 'auto' }}>
            <Text fontSize="20px" fontWeight="500" mb={1}>PRESCRIPTION AND MEDICATION
                TRACKER</Text>
            <Text mb={4}>If a doctor recommends a prescription, our
            tracker informs a patient when they can
            pick up medication at the pharmacy. A patient
            then must present their ID, insurance
            card, and the electronic version of a prescription.....
                </Text>
            <Button
              maxW="212px"
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
              Read More
                  </Button>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default GenCol;