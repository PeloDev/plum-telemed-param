import React from "react";
import "./style.css";


import { Card, Container, Row, Col, Image } from "react-bootstrap";
import line from '../images/icons/Asset 24@150x.png';

import icon1 from '../images/icons/Asset 25@150x.png';
import icon2 from '../images/icons/Asset 26@150x.png';
import icon3 from '../images/icons/Asset 27@150x.png';
import icon4 from '../images/icons/Asset 28@150x.png';
import icon5 from '../images/icons/Asset 29@150x.png';
import icon6 from '../images/icons/Asset 30@150x.png';
import icon7 from '../images/icons/Asset 31@150x.png';
import icon8 from '../images/icons/Asset 32@150x.png';
import PageTitle from "../components/pagetitle";

export default function Cards() {
  return (
    <div>
      <Container className="mt-5" >
        <PageTitle text="what we do" />
        <p >It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout.</p>

        <Row className="mt-3">
          <Col lg={4} style={{ display: 'flex' }}>
            <Card>
              <Card.Img src={icon6} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Heart Disease</Card.Title>
                <Card.Text className="3">
                  We check and cure the presence of enzymes
                  and proteins, which are risk factors
                  for developing cardiovascular disease
                  and stroke. This is a measure of
                  heart work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={{ display: 'flex' }}>
            <Card>
              <Card.Img src={icon5} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Eye Health</Card.Title>
                <Card.Text className="p-3">
                  We are good in many ways to improve
                  your eyesight which are basically
                  caused due to a multitude of factors
                  such as nervous disability, diabetes,
                  excessive smoking, and alcohol intake.
                    <p><a href='#!' className='text-danger'>Read more...</a></p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={{ display: 'flex' }}>
            <Card>
              <Card.Img src={icon4} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Pregnancy</Card.Title>
                <Card.Text className="p-3">
                  There are some common issues at the
                  time of pregnancy that is cured by us
                  in a very systematic manner such as
                  Morning sickness, Headaches, and Indigestion,
                  Cramps,
                    <p><a href='#!' className='text-danger'>Read more...</a></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col lg={4} style={{ display: 'flex' }}>
            <Card >
              <Card.Img src={icon1} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Diabetes</Card.Title>
                <Card.Text className="p-3">
                  Diabetes is a metabolic disorder in
                  which diminished functioning of the
                  digestive flre leads to a tendency
                  toward high blood sugar. And we are
                  here to help you out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={{ display: 'flex' }}>
            <Card>
              <Card.Img src={icon2} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Yellow Fever</Card.Title>
                <Card.Text className="p-3">
                  Yellow fever is spread by a species of
                  mosquito common to areas of Africa
                  and South America. And for this, we
                  have defined a list of vaccination
                  which is recommended before travel-
                    <p><a href='#!' className='text-danger'>Read more...</a></p>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col lg={4} style={{ display: 'flex' }}>
            <Card >
              <Card.Img src={icon3} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Blood Pressure</Card.Title>
                <Card.Text className="p-3">
                  Blood pressure is the pressure of circulating
                  blood against the walls of blood
                  vessels. Most of this pressure results
                  from the heart pumping blood
                  through the circulatory system. When
                    <p><a href='#!' className='text-danger'>Read more...</a></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={4} style={{ marginLeft: 'auto', display: 'flex' }}>
            <Card>
              <Card.Img src={icon8} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Gonorrhea</Card.Title>
                <Card.Text className="p-3">
                  Regular screening can help detect instances
                  when an infection is present
                  despite having no symptoms which is
                  actually a transmitted bacterial infection
                  that, if untreated, may cause infer-
                    <p><a href='#!' className='text-danger'>Read more...</a></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={{ marginRight: 'auto', display: 'flex' }}>
            <Card>
              <Card.Img src={icon7} style={{ width: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} varient='top' className="mt-2" />
              <Card.Body className="p-0">
                <Card.Title>Flu Vaccine</Card.Title>
                <Card.Text className="p-3">
                  We provide a range of Flu Vaccine depending
                  upon the type of patient and
                  flu intensity which helps in that protecting
                  the body against infection by
                  influenza viruses.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
