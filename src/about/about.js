
import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Image, Text } from "@chakra-ui/react";
import PageTitle from '../components/pagetitle';

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
      <Container className="mt-5 mb-0">
        <PageTitle text="who we are" />
        <Text textAlign="left" fontSize="1.75rem">ABOUT US</Text>

        <Row className="mt-4">
          <Col lg={6} className="text-left pr-1">
            <Text fontSize="18px" fontWeight="bold" mt={3}>Overview</Text>
            <Text pr={6}>
              Plum Telemed is an intercontinental provider of clinical
              and non-clinical telehealth services through the use of
              telecommunications technology. The company will be incorporated
              as a LLC in New Jersey, USA and was established
              to improve the health of poor and hard to reach
              communities. The business is 100% owned by its founders.
          </Text>

            <Text fontSize="18px" fontWeight="bold" mt={3}>Vision</Text>
            <Text pr={6}>
              To be a well respected and agile provider of telemedicine
              services to remote populations and medical professionals
              for ultimately achieving an increased standard of global
              healthcare quality.
          </Text>
            <Text fontSize="18px" fontWeight="bold" mt={3}>Mission</Text>
            <Text pr={6}>
              We exist to offer a multilayer telemedicine platform that
              enables healthcare practitioners to thrive and patients to
              access reliable medical care whilst creating rewarding careers
              for our people, generating a reasonable return for
              our shareholders and protecting the earth.
          </Text>
          </Col>
          <Col lg={6} className="p-0">
            <Card>
              <Image src={pic} fit="cover" height="500px" rounded />
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row>
          <Col lg={6}>
            <Card>
              <Image src={pic2} fit="cover" height="500px" rounded />
            </Card>
          </Col>
          <Col lg={6} className="p-0 text-left">
            <Text fontSize="22px" fontWeight="bold" mt={3} pl={2}>Our Culture & Values</Text>
            <Text fontSize="18px" mt={3} pl={3}>Our people culture</Text>
            <Text pl={3}>
              Plum Telemed’s character and personality is amply captured
              in its transparency, and inclusive, innovative, engaged
              and autonomous teams, and progressive, nurturing,
              flexible, fun and casual environment
            </Text>

            <Text fontSize="18px" mt={3} pl={3}>Our corporate values</Text>
            <Text pl={3}>
              Patient-focus - we are focused on delivering value for our
              patients
            </Text>
            <Text pl={3}>
              Accountability - we are reliable, responsible and honor our
              commitments in all our dealings
            </Text>
            <Text pl={3}>
              Confidentiality - we diligently protect the information of
              our stakeholders
            </Text>
            <Text pl={3}>
              Collaboration - we believe in the power of working together
              Transparency - we avoid tricks and hidden agendas, and
            </Text>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <PageTitle text="LEADERSHIP “OUR LEADERS”" /><Row className="mt-4">
          <Col lg={6} className="p-0 text-left pl-3">
            <Text display="inline-block" fontSize="22px" fontWeight="bold" mt={3}>Dr Daniel Dube MD</Text><i>  (Founder / CEO)</i>
            <Text pr={6} my={3}>
              Dr. Daniel Dube is Plum Telemed’s Chief Executive Officer
              (CEO). Dr. Dube is a specialist in internal medicine, pulmonary
              medicine and critical care and lately has been focusing
              on COVID-19 healthcare. Dr. Dube has held various
              leadership positions with Forum for the Social Economic
              Development of Mangochi (FOSEMA) in Malawi (President),
              Nasoro Medical PLLC (CEO), Rose Chisowa Medical
              Corporation (President), and Shannon Medical Center
              Texas (Position). He has also served as a Director with Pulmonary
              Rehabilitation.
          </Text>
            <Text pr={6} my={3}>
              Dr. Daniel Dube is a very experienced medical specialist
              who is a trained graduate of the University of Edinburgh in
              Scotland in UK, East State University and Stanford University
              in USA. He holds a number of qualications from acclaimed
              schools of medicine including a BMed Sci (Hons)
              from the St. Andrews University (UK), MD from the University
              of Edinburgh (UK), Internal Medicine from the East
              Tennessee State University and Postdoctoral Fellowship
              from Stanford University.
          </Text>
            <Text pr={6} my={3}>
              Dr. Daniel Dube is attributed with making published contributions
              in various domains of literature in the medical
              field including Cytokines and the Pathogenesis of Atherosclerosis,
              Molecular Mechanisms Regulating Atherogenesis
              in HIV Infection, Radiation induced lung injury and
              Focal Adhesions. The majority of these were published in
              Elselvier Publications and Encyclopedia of Respiratory
              Medicine.
          </Text>
            <Text pr={6} my={3}>
              Dr. Dube is a winner of numerous awards that include
              Angel Heart Awards for compassion and excellence in Patient
              Care, Thomas Ronald Award (1999) for humanism in
              the care of the cancer patients and also won the Teacher
              of The Year Award; East Iowa Family Practice Program
              2017.
          </Text>
          </Col>
          <Col lg={6} className="p-0">
            <Card>
              <Image src={pic3} fit="cover" height="500px" rounded />
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row>
          <Col lg={6}>
            <Card>
              <Image fit="cover" src={pic4} height="500" rounded />
            </Card>
          </Col>
          <Col lg={6} className="p-0 text-left">
            <Text display="inline-block" fontSize="22px" fontWeight="bold" mt={0}>Leonard Munthali</Text><i>  (Founder / COO)</i>
            <Text my={3}>
              Mr Leonard Munthali is a Technology and Telecommunications
              experts. He boasts twenty eight years of corporate
              experience in various industries, seventeen of which are in
              telecommunications sector and the rest in various engagements
              in Information Technology in the Banking,
              Retail. Medical and Government sectors assuming responsibilities
              in areas of Management, Leadership, Strategy, Financial
              Management and IT Operations.
            </Text>
            <Text my={3}>
              He is qualified with a Bachelor of Science Degree in Computer
              Sciences and a Masters Degree in Information Management.
            </Text>
            <Text my={3}>
              He has served in different senior management and Executive
              roles in Mobile telecommunications, Medical industry,
              various International IT consulting forms and in the banking
              sector in Central Africa, South Africa, United Kingdom
              and USA.
            </Text>
            <Text my={3}>
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
            </Text>
            <Text my={3}>
              It is against this background that Leonard Munthali brings
              a wealth of experience to leverage technology to enable
              Health practitioners to have seamless access to patients
              and to offer solutions that improve health care access and
              affordability, enhance the health care experience and
              achieve better health outcomes by prolonging peoples
              lives.
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutContent;