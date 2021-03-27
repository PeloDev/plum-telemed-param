import React from "react";
import {
  //Image,
  FormControl,
  Button,
  InputGroup,
  Form,
  ProgressBar
} from "react-bootstrap";
import { Image, Text } from "@chakra-ui/react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
//logo
import logo from "../images/logo/Asset 52@150x.png";
//social media
import link1 from "../images/socials/Asset 43@150x.png";
import link2 from "../images/socials/Asset 44@150x.png";
import link3 from "../images/socials/Asset 45@150x.png";
import link4 from "../images/socials/Asset 46@150x.png";
//stores image
import link10 from "../images/socials/Asset 47@150x.png";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "rgb(0,71,171)" }}
      className="text-white text-center text-lg-left mt-5"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4 mb-md-0">
            <Image src={logo} height="50" rounded />

            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here.
            </p>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <Image mr="2" display="inline-block" src={link3} width="40px" height="40px" rounded />
            <Image mr="2" display="inline-block" src={link2} width="40px" height="40px" rounded />
            <Image mr="2" display="inline-block" src={link3} width="40px" height="40px" rounded />
            <Image mr="2" display="inline-block" src={link4} width="40px" height="40px" rounded />
            <h5 className="text-uppercase mt-4 mb-0">
              <Image src={link1} display="inline-block" height="20px" rounded /><Text display="inline-block" fontSize="1.25rem" mx="6px" fontWeight={500}> Quick Links </Text>
            </h5>
            <div className="mb-4 mt-2">
              <ProgressBar
                variant="danger"
                now={20}
                style={{ height: "5px", width: "60%" }}
              />
            </div>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Why Plumtelemed
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Benefits for Consultations
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Benefits for Patients
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <Image
              src={link10}
              height="40px"
              style={{ marginRight: "0" }}
              className="mr=0"
            />
            <Text display="inline-block" fontSize="1.25rem" h="24px" lineHeight="1.2" fontWeight={500} className="text-uppercase mb-0 mt-4">Newsletter</Text>
            <div className="mb-4 mt-2">
              <ProgressBar
                variant="danger"
                now={20}
                style={{ height: "5px", width: "80%" }}
              />
            </div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="danger" rounded>
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
      </div>
    </MDBFooter>
  );
}
