import React from "react";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import RoundInput from "../components/roundInput";
import slide4 from "../welcome/images/Asset 115100.png";
import PageTitle from "../components/pagetitle";
import Footer from '../footer/footer';
import PageBanner from "../components/pagebanner";

function Contact() {
  const tempCaptcha = "d8AwB";

  return (
    <>
      <PageBanner text='"We will be happy to hear from you"' image={slide4} />
      <PageTitle text="contact us" />
      <Box margin="36px 0px">
        <Box
          backgroundColor="#DDD"
          borderRadius={72}
          margin="0px 8%"
          padding="36px"
        >
          <Flex>
            <Text ml="12px" flex={1} fontWeight={500} fontSize="22px">
              GET IN TOUCH
            </Text>
            <Text flex={1} textAlign="right">
              *All fields are mandatory
            </Text>
          </Flex>
          <Box width="100%" px="12px">
            <RoundInput
              type="select"
              placeholder="-Your query is related to-"
              options={[
                //{ label: "-Your query is related to-", value: "" },
                { label: "option A", value: "value A" },
                { label: "option B", value: "value B" },
                { label: "option C", value: "value C" }
              ]}
            />
          </Box>
          <Flex py="12px">
            <Text fontWeight={500} fontSize="22px" mx="12px" flex={1}>
              Captcha
            </Text>
            <Box
              mx="12px"
              h="36px"
              pt="8px"
              flex={1}
              bg="#BBB"
              borderRadius="48px"
              textAlign="center"
            >
              <Text>{tempCaptcha}</Text>
            </Box>
            <Button
              mx="12px"
              h="36px"
              pt="4px"
              boxShadow="md"
              flex={1}
              borderRadius="48px"
              textAlign="center"
              bg="rgb(0,71,171)"
              border="1px solid rgb(0,71,171)"
              color="white"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.7 }}
              _focus={{}}
            >
              Refresh Captcha
            </Button>
            <Box mx="12px" flex={1}>
              <RoundInput placeholder="Enter Captcha" />
            </Box>
          </Flex>
          <Flex>
            <Box flex={1} mx="12px">
              <RoundInput placeholder="Name" />
            </Box>
            <Box flex={1} mx="12px">
              <RoundInput placeholder="Enter phone number" />
            </Box>
            <Box flex={1} mx="12px">
              <RoundInput placeholder="Email" />
            </Box>
          </Flex>
          <Box w="100%" px="12px" my="18px">
            <RoundInput type="multiline" placeholder="Message" />
          </Box>
          <Box w="100%" textAlign="center">
            <Button
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              flex={1}
              borderRadius="48px"
              textAlign="center"
              bg="primary"
              border="1px solid primary"
              color="white"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.7 }}
              _focus={{}}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Contact;
