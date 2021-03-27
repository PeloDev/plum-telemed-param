import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Text
} from "@chakra-ui/react";
import slide5 from "../welcome/images/Asset 116100.png";
import patientIcon from "../images/icons/Asset 30@150x.png";
import healthcareIcon from "../images/icons/Asset 92@150x.png";
import Footer from '../footer/footer';
import PageTitle from "../components/pagetitle";
import PageBanner from "../components/pagebanner";

function SignUp() {
  return (
    <>
      <PageBanner text="Sign up with PlumTelemed and avail great membership plans!!!" image={slide5} />
      <PageTitle text="sign up" />
      <Center textAlign="center" my="18px">
            <Text fontWeight={500} fontSize="20px">
              ARE YOU?
            </Text>
          </Center>
      <Flex pb="36px">
        <Spacer />
        <Box
          flex={1}
          backgroundColor="#DDD"
          _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
          borderRadius={30}
          minW="300px"
          padding="2%"
          pb="12px"
        >
          <Center>
            <Image my="12px" h="64px" src={patientIcon} />
          </Center>
          <Center textAlign="center">
            <Text fontWeight={600} fontSize="20px">
              Patient
            </Text>
          </Center>
          <Center textAlign="center">
            <Text fontSize="18px">I am looking for my health & well being</Text>
          </Center>
        </Box>
        <Box w="36px" />
        <Box
          flex={1}
          backgroundColor="#DDD"
          _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
          borderRadius={30}
          minW="300px"
          padding="2%"
          pb="12px"
        >
          <Center>
            <Image my="12px" h="64px" src={healthcareIcon} />
          </Center>
          <Center textAlign="center">
            <Text fontWeight={600} fontSize="20px">
              Healthcare Provider
            </Text>
          </Center>
          <Center textAlign="center">
            <Text fontSize="18px">
              I am looking for the health & well being of others
            </Text>
          </Center>
        </Box>
        <Spacer />
      </Flex>
      <Footer />
    </>
  );
}

export default SignUp;
