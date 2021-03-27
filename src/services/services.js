import React from "react";
import { Image, Card, Container, Row, Col, Button } from "react-bootstrap";
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
              <Image src={mainpic} height="500" rounded />
            </Card>
          </Col>
          <Col lg={6} className="text-left">
            <h3>OUR SERVICES</h3>
            <p>
              Plum Telemed offers solutions that improve health care access and
              affordability, enhance the health care experience and achieve
              better health outcomes. The following are the services that we
              offer:
            </p>

            <h6>Vision</h6>
            <p>
              Preventative care, diagnosis, monitoring, consultations,
              surveillances, follow-up visits, second opinions and curative
              care.
            </p>
            <h6>Mission</h6>
            <p>
              Health promotion, continuing medical education, virtual physician
              to physician discussions, virtual provider referrals, training,
              virtual medical tourism and peer networking.
            </p>
            <p>Training and technical support for telemedicine consumers</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicesPage;
