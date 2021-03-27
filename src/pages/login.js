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

  const [formIsValid, updateFormIsValid] = useState(false);

  function handleFormChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "countryCode" && value.length > 0 && !value.includes("+")) {
      newValue = "+" + value;
    }

    let validator = "";
    if (value.length === 0 || value.replace("+", "").length === 0) {
      validator = `Please enter ${form[name].label}`;
    }


    updateForm((previousForm) => {
      const newForm = {
        ...previousForm,
        [name]: {
          ...previousForm[name],
          value: newValue,
          validator: validator
        }
      };
      let isValid = true;
      Object.keys(newForm).forEach(key => {
        if (newForm[key].validator.length > 0) {
          isValid = false;
        }
      });
      updateFormIsValid(isValid);
      return newForm;
    });
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
              validator={form.countryCode.validator}
              onChange={(e) => handleFormChange(e)}
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
              validator={form.phone.validator}
              onChange={(e) => handleFormChange(e)}
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
                border="1px solid secondary"
                color="white"
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.7 }}
                _focus={{}}
                disabled={!formIsValid}
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
                border="1px solid secondary"
                color="white"
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.7 }}
                _focus={{}}
                disabled={!formIsValid}
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
