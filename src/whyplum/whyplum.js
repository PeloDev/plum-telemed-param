// import "./styles.css";
import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Box, Image, Text } from "@chakra-ui/react";
import PageTitle from '../components/pagetitle';
import pic from '../images/icons/whyplum/plum.png';


function Plum() {
  return (
    <div>
      <Container className="mt-4">
        <PageTitle text="who we are" />
        <Row className="mt-4">
          <Col lg={4} className="text-left">
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">Improved overall customer experience</Text>
            <Text fontSize="15px" fontWeight="500">We aim to improve our patients’ experience
            from their first interaction to the completion of
            care. This includes allowing patients to request
            appointments online, reducing wait times,
            lowering the cost of care, sharing cost estimates
            with patients before they receive care,
            and improving patient access to prescriptions
            and rehabilitation programmes.
              </Text>
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">Compliance with relevant laws</Text>
            <Text fontSize="15px" fontWeight="500">Our platform is designed to comply with all
            relevant laws and regulations. We protect sensitive
            healthcare information and use a reliable
            digital infrastructure to ensure patient safety,
            such as adequate bandwidth to prevent disruptions
            in care. We meet our customers’ needs
            without putting them at risk.
              </Text>
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">Telemedicine re-imbursement</Text>
            <Text fontSize="15px" fontWeight="500">We offer reimbursement to our physicians,
            either through medical aid schemes, or commercial
            and private payers. These companies
            and organizations will then reimburse
              </Text>
          </Col>
          <Col lg={4} className="p-0">
            <Box position="relative" h="100%">
              <Image className="y-center" mt="5" src={pic} style={{ display: 'block', width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
            </Box>
          </Col>
          <Col lg={4} className="text-right">
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">Improved patients’ access to care</Text>
            <Text fontSize="15px" fontWeight="500">Our platform won’t completely replace
            face-to-face consultations, but it can make
            medical care more accessible to patients with
            limited mobility. Some patients may live far
            away from a healthcare facility, so we provide
            the option to message or consult with a physician
            remotely to improve their access to care.
              </Text>
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">We help patients achieve specific outcomes</Text>
            <Text fontSize="15px" fontWeight="500">We help patients better manage their conditions
            to achieve specific outcomes based on
            their needs. This is because our platform includes
            important features such as remote patient
            monitoring (RPM) to help patients reach
            these outcomes.
              </Text>
            <Text mt="12px" mb="3px" fontWeight="bold" fontSize="17px">Decreasing the cost of health</Text>
            <Text fontSize="15px" fontWeight="500">We reduce the cost of care by eliminating certain
            expenses for the consumer, such as travel
            expenses, long wait times and overall costs of
            care for facilities by reducing hospital readmission
            rates, improving communication between
            the patient and their care provider, and increasing
            access to preventative care services.
              </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Plum;