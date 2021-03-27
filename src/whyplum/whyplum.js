//import "./styles.css";
import React from 'react';
import { Carousel, Container, Row, Col, Image, Card } from 'react-bootstrap';
import PageTitle from '../components/pagetitle';


function Plum() {
  return (
    <div>
      <Container className="mt-5">
        <PageTitle text="who we are" />
        <Row className="mt-4">
          <Col lg={4} className="text-left">
            <h6>Improved overall customer experience</h6>
            <p>We aim to improve our patients’ experience
            from their first interaction to the completion of
            care. This includes allowing patients to request
            appointments online, reducing wait times,
            lowering the cost of care, sharing cost estimates
            with patients before they receive care,
            and improving patient access to prescriptions
            and rehabilitation programmes.
              </p>
            <h6>Compliance with relevant laws</h6>
            <p>Our platform is designed to comply with all
            relevant laws and regulations. We protect sensitive
            healthcare information and use a reliable
            digital infrastructure to ensure patient safety,
            such as adequate bandwidth to prevent disruptions
            in care. We meet our customers’ needs
            without putting them at risk.
              </p>
            <h6>Telemedicine re-imbursement</h6>
            <p>We offer reimbursement to our physicians,
            either through medical aid schemes, or commercial
            and private payers. These companies
            and organizations will then reimburse
              </p>
          </Col>
          <Col lg={4} >

          </Col>
          <Col lg={4} className="text-right">
            <h6>Improved patients’ access to care</h6>
            <p>Our platform won’t completely replace
            face-to-face consultations, but it can make
            medical care more accessible to patients with
            limited mobility. Some patients may live far
            away from a healthcare facility, so we provide
            the option to message or consult with a physician
            remotely to improve their access to care.
              </p>
            <h6>We help patients achieve specific outcomes</h6>
            <p>We help patients better manage their conditions
            to achieve specific outcomes based on
            their needs. This is because our platform includes
            important features such as remote patient
            monitoring (RPM) to help patients reach
            these outcomes.
              </p>
            <h6>Decreasing the cost of health</h6>
            <p>We reduce the cost of care by eliminating certain
            expenses for the consumer, such as travel
            expenses, long wait times and overall costs of
            care for facilities by reducing hospital readmission
            rates, improving communication between
            the patient and their care provider, and increasing
            access to preventative care services.
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Plum;