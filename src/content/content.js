
import React from 'react';
import { Image, Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import med from '../content/images/Asset 112100.png';
import icon1 from '../content/images/icons/Asset 33@150x.png';
import icon2 from '../content/images/icons/Asset 34@150x.png';
import icon3 from '../content/images/icons/Asset 35@150x.png';
import icon4 from '../content/images/icons/Asset 36@150x.png';
import logo from '../content/images/Asset 24@150x.png'; // gives image path

  
function App() {
  return (
    <div>
 <Container className="mt-5">
      <h3 className="mb-0">PROVIDER NETWORK</h3>
      <Image src={logo} height="5"/>
      <p>It is a long established fact that a reader will</p>
        <Row>
          <Col lg={6} className="mb-3 text-left" >
            <div className="mb-3 "><Image src={icon2} rounded width="50" />   Highly Qualified Physicians</div>
            <div className="mb-3 "><Image src={icon1} rounded width="50" />   Telemedicine Solutions</div>
            <div className="mb-3 "><Image src={icon4} rounded width="50" />   Medical Specialties</div>
            <div className="mb-3 "><Image src={icon3} rounded width="50" />   Recent Partnerships</div>

          </Col>
          <Col lg={6} className="ml-0 p-0">
          <Card>
            <Image src={med} height="350" rounded/>
          </Card>
          </Col>
          
        </Row>
    </Container>
      <Container className="mt-5">
      <h3 >HEAR FROM OUR EXPERTS</h3>
      <Image  src={logo} height="5" style={{ display: 'block', marginLeft: 'auto',marginRight: 'auto'}}/>
        <Row className="mt-3">
        <Col lg={6} className="ml-0 border bo"  style={{backgroundColor: 'rgb(0,73,83)'}}>
            <Image style={{ width: '5rem', borderRadius: '50%', display: 'block', marginLeft: 'auto',marginRight: 'auto'}} varient='top' className="mt-4" src={med}/>
              <p className="mt-4 text-white">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                make up the bulk of
                the card's content.
              </p>
              
              <h5 className="text-white">Jhon Due</h5>
          </Col>
          <Col lg={6} className="p-0">
          <Card>
            <Image src={med} height="350" rounded/>
          </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
      <h3 >HEAR FROM OUR EXPERTS</h3>
      <Image src={logo} height="5" style={{ display: 'block', marginLeft: 'auto',marginRight: 'auto'}}/>

        <Row className="mt-4">
        <Col lg={6} className="p-0">
          <Card>
          <Image src={med} height="350" rounded/>
          </Card>
        </Col>
          <Col lg={6} className="text-left">
            <ListGroup variant="flush">
              <ListGroup.Item>What is telemedicine?</ListGroup.Item>
              <ListGroup.Item>What is the diference between telemedicineand telehealth?</ListGroup.Item>
              <ListGroup.Item>What are the limitations of telemedicine?</ListGroup.Item>
              <ListGroup.Item>What are the benefits of telemedicine versus traditional “in-person” doctor’s appointment?</ListGroup.Item>
            </ListGroup>
            <Button variant="primary">Primary</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default App;