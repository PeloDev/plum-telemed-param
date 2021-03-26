import React from "react";


import {  Card, Container, Row, Col } from "react-bootstrap";

export default function Cards() {
  return (
    <div className="Container">
      <Container className="center">
      <Row className="mt-3" >
          <Col>
            <Card >
              <Card.Body>
                <Card.Title>Heart Disease</Card.Title>
                <Card.Text>
                    We check and cure the presence of enzymes
                    and proteins, which are risk factors
                    for developing cardiovascular disease
                    and stroke. This is a measure of
                    heart work.
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Eye Health</Card.Title>
                <Card.Text>
                    We are good in many ways to improve
                    your eyesight which are basically
                    caused due to a multitude of factors
                    such as nervous disability, diabetes,
                    excessive smoking, and alcohol intake.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Pregnancy</Card.Title>
                <Card.Text>
                    There are some common issues at the
                    time of pregnancy that is cured by us
                    in a very systematic manner such as
                    Morning sickness, Headaches, and Indigestion,
                    Cramps, varicose veins,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Diabetes</Card.Title>
                <Card.Text>
                    Diabetes is a metabolic disorder in
                    which diminished functioning of the
                    digestive re leads to a tendency
                    toward high blood sugar. And we are
                    here to help you out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Yellow Fever</Card.Title>
                <Card.Text>
                    Yellow fever is spread by a species of
                    mosquito common to areas of Africa
                    and South America. And for this, we
                    have dened a list of vaccination
                    which is recommended before travel-
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Blood Pressure</Card.Title>
                <Card.Text>
                    Blood pressure is the pressure of circulating
                    blood against the walls of blood
                    vessels. Most of this pressure results
                    from the heart pumping blood
                    through the circulatory system. When
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Gonorrhea</Card.Title>
                <Card.Text>
                    Regular screening can help detect instances
                    when an infection is present
                    despite having no symptoms which is
                    actually a transmitted bacterial infection
                    that, if untreated, may cause infer-
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    We provide a range of Flu Vaccine depending
                    upon the type of patient and
                    u intensity which helps in that protecting
                    the body against infection by
                    inuenza viruses.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Gonorrhea</Card.Title>
                <Card.Text>
                    Regular screening can help detect instances
                    when an infection is present
                    despite having no symptoms which is
                    actually a transmitted bacterial infection
                    that, if untreated, may cause infer-
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col><Card>
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    We provide a range of Flu Vaccine depending
                    upon the type of patient and
                    u intensity which helps in that protecting
                    the body against infection by
                    inuenza viruses.
                </Card.Text>
              </Card.Body>
            </Card></Col>
        </Row>
      </Container>
    </div>
  );
}
