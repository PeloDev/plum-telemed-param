//import "./styles.css";
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

import icon1 from '../images/icons/features/Icon1.png';
import icon2 from '../images/icons/features/Icon2.png';
import icon3 from '../images/icons/features/Icon3.png';
import icon4 from '../images/icons/features/Icon4.png';
import icon5 from '../images/icons/features/Icon5.png';
import icon6 from '../images/icons/features/Icon6.png';
import icon7 from '../images/icons/features/Icon7.png';
import icon8 from '../images/icons/features/Icon8.png';

  
function FeatureCards() {
  return (
    <div>
      <Container>
        <Row className="">
          <Col lg={4} className="">
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon1} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Confidentiality Regulations
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={4}>
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon2} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Appointment Booking & Scheduling System
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={4}>
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon3} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Video Consultation
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Box minW="320px" margin="2%">
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon4} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Alert Remainder & Notification
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>

          <Col lg={4}>
          <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon5} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Payment History
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>

          <Col lg={4} >
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon6} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    User Membership Plans
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={4} style={{marginLeft: 'auto'}}>
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon7} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Extensive Doctor's Using Various <br/> Criteria
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box> 
          </Col>
          <Col lg={4} style={{marginRight: 'auto'}}>
            <Box minW="320px" margin="2%" >
              <Box
                backgroundColor="#DDD"
                borderRadius={30}
                margin=""
                minW="300px"
                padding="2%"
                pb="10px"
              >
                <Box w="100%" textAlign="center" mt="25px" mb="25px" px="12px">
                  <Box display="inline-block flex" my="12px" mx="20px" mb="20px">
                    <Image src={icon8} height="80px" />
                  </Box>
                  <Center textAlign="center">
                    <Text fontWeight={600} fontSize="15px">
                    Manage User's & View Complete Details of Users
                    </Text>
                    </Center>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default FeatureCards;