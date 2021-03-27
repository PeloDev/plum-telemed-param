import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Image,
  Text
} from "@chakra-ui/react";
import RoundInput from "../components/roundInput";
import slide5 from "../welcome/images/Asset 116100.png";

import Footer from '../footer/footer';
import PageTitle from "../components/pagetitle";
import PageBanner from "../components/pagebanner";
function Login() {
  const [form, updateForm] = useState({
    countryCode: { label: "Country Code", value: "", validator: "" },
    phone: { label: "Mobile Number", value: "", validator: "" }
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "countryCode" && value.length > 0 && !value.includes("+")) {
      newValue = "+" + value;
    }

    let validator = "";
    if (value.length === 0) {
      validator = `Please enter ${form[name].label}`;
    }

    updateForm((previousValue) => ({
      ...previousValue,
      [name]: { ...previousValue[name], value: newValue, validator: validator }
    }));
  }

  return (
    <>
      <PageBanner text="Login with PlumTelemed and avail great membership plans!!!" image={slide5} />
      <PageTitle text="login" />
      <Box minW="320px" margin="2% 0px" pb="80px">
        <Box
          backgroundColor="#DDD"
          borderRadius={72}
          margin="0px 25%"
          minW="300px"
          padding="2%"
          pb="12px"
        >
          <Center textAlign="center">
            <Text fontWeight={500} fontSize="22px">
              WELCOME TO PLUMTELEMED
            </Text>
          </Center>
          <Text mt="12px" fontWeight={500} fontSize="18px" mx="12px" flex={1}>
            Country Code
          </Text>
          <Box width="100%" px="12px">
            <RoundInput
              name="countryCode"
              value={form.countryCode.value}
              placeholder="(+27)"
              onChange={handleFormChange}
            />
          </Box>
          <Text mt="12px" fontWeight={500} fontSize="18px" mx="12px" flex={1}>
            Registered Mobile Number
          </Text>
          <Box width="100%" px="12px">
            <RoundInput
              name="phone"
              value={form.phone.value}
              placeholder="Enter phone number"
              type="tel"
              onChange={handleFormChange}
            />
          </Box>
          <Box w="100%" textAlign="center" mt="36px" mb="72px" px="12px">
            <Box display="inline-block" my="12px" mx="28px">
              <Button
                maxW="212px"
                h="36px"
                pt="2px"
                px="36px"
                borderRadius="48px"
                textAlign="center"
                bg="primary"
                border="1px solid #E33C28"
                color="white"
                _hover={{ bg: "E74032" }}
              >
                Login with OTP
              </Button>
            </Box>

            <Box display="inline-block" my="12px" mx="28px">
              <Button
                maxW="212px"
                h="36px"
                pt="2px"
                px="36px"
                borderRadius="48px"
                textAlign="center"
                bg="primary"
                border="1px solid #E33C28"
                color="white"
                _hover={{ bg: "E74032" }}
              >
                Login with Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Login;
