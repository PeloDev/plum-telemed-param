
import React from 'react';
import {Carousel, Container, Row, Col, Image, Card} from 'react-bootstrap';

//about image
import pic from '../images/about/about.png';
import pic2 from '../images/about/about2.png';
import pic3 from '../images/about/about3.png';
import pic4 from '../images/about/about4.png';

//Icons
import icon from '../images/icons/Asset 24@150x.png';
  
function AboutContent() {
  return (
    <div>
    <Container className="mt-5">
      <h3>WHO WE ARE</h3>
      <Image  src={icon} height="5" style={{ display: 'block', marginLeft: 'auto',marginRight: 'auto'}}/>
      <h3 className="text-left">ABOUT US</h3>
        <Row className="mt-4">
            
          <Col lg={6} className="p-0 text-left">
          <h6>Overview</h6>
          <p>
          Plum Telemed is an intercontinental provider of clinical
          and non-clinical telehealth services through the use of
          telecommunications technology. The company will be incorporated
          as a LLC in New Jersey, USA and was established
          to improve the health of poor and hard to reach
          communities. The business is 100% owned by its founders.
          </p>

          <h6>Vision</h6>
          <p>
          To be a well respected and agile provider of telemedicine
          services to remote populations and medical professionals
          for ultimately achieving an increased standard of global
          healthcare quality.
          </p>
          <h6>Mission</h6>
          <p>
          We exist to offer a multilayer telemedicine platform that
          enables healthcare practitioners to thrive and patients to
          access reliable medical care whilst creating rewarding careers
          for our people, generating a reasonable return for
          our shareholders and protecting the earth.
          </p>
          </Col>
          <Col lg={6} className="p-0">
          <Card>
            <Image src={pic} height="500" rounded/>
          </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row>
          <Col lg={6}>
            <Card>
              <Image src={pic2} height="500" rounded/>
            </Card>
          </Col>
          <Col lg={6} className="p-0 text-left">
            <h6>Our people culture</h6>
            <p>
            Plum Telemed’s character and personality is amply captured
            in its transparency, and inclusive, innovative, engaged
            and autonomous teams, and progressive, nurturing,
            flexible, fun and casual environment
            </p>

            <h6>Our corporate values</h6>
            <p>
            Patient-focus - we are focused on delivering value for our
            patients
            </p>
            <p>
            Accountability - we are reliable, responsible and honor our
            commitments in all our dealings
            </p>
            <p>
            Confidentiality - we diligently protect the information of
            our stakeholders
            </p>
            <p>
              Collaboration - we believe in the power of working together
              Transparency - we avoid tricks and hidden agendas, and
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
      <h3>LEADERSHIP “OUR LEADERS”</h3>
      <Image  src={icon} height="5" style={{ display: 'block', marginLeft: 'auto',marginRight: 'auto'}}/>
        <Row className="mt-4">
        <Col lg={6} className="p-0 text-left">
          <h6>Dr Daniel Dube MD</h6><i>(Founder / CEO)</i>
          <p>
            Dr. Daniel Dube is Plum Telemed’s Chief Executive Ocer
            (CEO). Dr. Dube is a specialist in internal medicine, pulmonary
            medicine and critical care and lately has been focusing
            on COVID-19 healthcare. Dr. Dube has held various
            leadership positions with Forum for the Social Economic
            Development of Mangochi (FOSEMA) in Malawi (President),
            Nasoro Medical PLLC (CEO), Rose Chisowa Medical
            Corporation (President), and Shannon Medical Center
            Texas (Position). He has also served as a Director with Pulmonary
            Rehabilitation.
          </p>
          <p>
            Dr. Daniel Dube is a very experienced medical specialist
            who is a trained graduate of the University of Edinburgh in
            Scotland in UK, East State University and Stanford University
            in USA. He holds a number of qualications from acclaimed
            schools of medicine including a BMed Sci (Hons)
            from the St. Andrews University (UK), MD from the University
            of Edinburgh (UK), Internal Medicine from the East
            Tennessee State University and Postdoctoral Fellowship
            from Stanford University.
          </p>
          <p>
            Dr. Daniel Dube is attributed with making published contributions
            in various domains of literature in the medical
            field including Cytokines and the Pathogenesis of Atherosclerosis,
            Molecular Mechanisms Regulating Atherogenesis
            in HIV Infection, Radiation induced lung injury and
            Focal Adhesions. The majority of these were published in
            Elselvier Publications and Encyclopedia of Respiratory
            Medicine.
          </p>
          <p>
            Dr. Dube is a winner of numerous awards that include
            Angel Heart Awards for compassion and excellence in Patient
            Care, Thomas Ronald Award (1999) for humanism in
            the care of the cancer patients and also won the Teacher
            of The Year Award; East Iowa Family Practice Program
            2017.
          </p>
          </Col>
          <Col lg={6} className="p-0">
            <Card>
              <Image src={pic3} height="500" rounded/>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row>
          <Col lg={6}>
            <Card>
              <Image src={pic4} height="500" rounded/>
            </Card>
          </Col>
          <Col lg={6} className="p-0 text-left">
            <h6>Leonard Munthali (Founder / COO)</h6>
            <p>
              Mr Leonard Munthali is a Technology and Telecommunications
              experts. He boasts twenty eight years of corporate
              experience in various industries, seventeen of which are in
              telecommunications sector and the rest in various engagements
              in Information Technology in the Banking,
              Retail. Medical and Government sectors assuming responsibilities
              in areas of Management, Leadership, Strategy, Financial
              Management and IT Operations.
            </p>
            <p>
              He is qualified with a Bachelor of Science Degree in Computer
              Sciences and a Masters Degree in Information Management.
            </p>
            <p>
              He has served in different senior management and Executive
              roles in Mobile telecommunications, Medical industry,
              various International IT consulting forms and in the banking
              sector in Central Africa, South Africa, United Kingdom
              and USA.
            </p>
            <p>
            Leonard Munthali is a passionate leader with first class
            technology and operations management skills coupled
            with a long track record of successfully leading organizations
            into maximizing ROI through a combination of IT
            Transformation and Digital Enablement strategies to
            achieve organizational goals and objectives in order to
            gain competitive advantage . In modern times Information
            technology is no longer a backend function but rather a
            business partner rendering a direct influence on the customer
            experience.
            </p>
            <p>
            It is against this background that Leonard Munthali brings
            a wealth of experience to leverage technology to enable
            Health practitioners to have seamless access to patients
            and to offer solutions that improve health care access and
            affordability, enhance the health care experience and
            achieve better health outcomes by prolonging peoples
            lives.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default AboutContent;