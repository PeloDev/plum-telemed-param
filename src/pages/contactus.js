import React, { useState } from "react";
import { Box, Button, Center, Container, Flex, Image, Text } from "@chakra-ui/react";
import RoundInput from "../components/roundInput";
import slide4 from "../welcome/images/Asset 115100.png";
import PageTitle from "../components/pagetitle";
import Footer from '../footer/footer';
import PageBanner from "../components/pagebanner";

function Contact() {
  const tempCaptcha = "d8AwB";

  const emptyForm = {
    queryType: { label: "Your query is related to", value: "Your query is related to", validator: "" },
    captcha: { label: "Enter Captcha", value: "", validator: "" },
    name: { label: "Name", value: "", validator: "" },
    phone: { label: "Mobile Number", value: "", validator: "" },
    email: { label: "Email", value: "", validator: "" },
    message: { label: "Message", value: "", validator: "" },
  };

  const [form, updateForm] = useState({...emptyForm});

  const [formIsValid, updateFormIsValid] = useState(false);

  function validateForm(validateCaptcha = false) {
    if (validateCaptcha === true && form.captcha.value  !== tempCaptcha) {
      form.captcha.validator = "Invalid captcha. Try again";
    }
    if (form.captcha.value === "Your query is related to") {
      form.queryType.value = "Please select query";
    }

    let isValid = true;
    Object.keys(form).forEach(key => {
      if (form[key].validator.length > 0) {
        isValid = false;
      }
    });
    updateFormIsValid(isValid);
    return isValid;
  }


  function handleFormChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    console.log(name);
    console.log(value);
    let validator = "";
    if (value.length === 0 || value.replace("+", "").length === 0) {
      validator = `Please enter ${form[name].label}`;
    }

    if (name === "queryType" && value === "Your query is related to") {
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
      console.log(newForm);
      validateForm();
      return newForm;
    });
  }

  function handleSend() {
    const isValid = validateForm(true);

    if (isValid) {
      updateForm(emptyForm);
    }
  }

  return (
    <>
      <PageBanner text='"We will be happy to hear from you"' image={slide4} />
      <PageTitle text="contact us" />
      <Box margin="36px 0px" minH="700px" mb="0px">
        <Box position="absolute" w="100%" zIndex="0">
          <Box position="absolute" bg="rgba(0,0,0,0.3)" h="100%" w="100%" zIndex="1"></Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.9391129676656!2d-117.57091918525282!3d33.96840442959191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcca6b132076f7%3A0x68f9488ccfd8b195!2s6575%20Hollis%20St%2C%20Corona%2C%20CA%2092880%2C%20USA!5e0!3m2!1sen!2sza!4v1616849222224!5m2!1sen!2sza&center=" width="100%" height="750" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
        </Box>
        <Box
          zIndex="2"
          bg="#FFF"
          borderBottomLeftRadius={72}
          //margin="0px 8%"
          ml="36px"
          p="36px"
          minH="700px"
          w="420px"
          top="2px"
          right="2px"
          position="relative"
          float="right"
        >
          <PageTitle text="get in touch" fontSize={20} />
          <Box width="100%" px="12px" my="6px">
            <RoundInput
              name="queryType"
              value={form.queryType.value}
              validator={form.queryType.validator}
              type="select"
              placeholder="-Your query is related to-"
              options={[
                //{ label: "-Your query is related to-", value: "" },
                { label: "option A", value: "value A" },
                { label: "option B", value: "value B" },
                { label: "option C", value: "value C" }
              ]}
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Text fontWeight={500} fontSize="22px" mx="12px" flex={1}>
            Captcha
            </Text>
          <Container
            mx="24px"
            h="36px"
            w="auto"
            my="6px"
            pt="8px"
            bg="#BBB"
            borderRadius="48px"
            textAlign="center"
          >
            <Text>{tempCaptcha}</Text>
          </Container>
          <Button
            mx="12px"
            my="6px"
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
          <Box mx="12px" my="6px" flex={1}>
            <RoundInput
              name="captcha"
              value={form.captcha.value}
              validator={form.captcha.validator}
              placeholder="Enter Captcha"
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Box flex={1} mx="12px" my="6px">
            <RoundInput
              name="name"
              value={form.name.value}
              validator={form.name.validator}
              placeholder="Name"
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Box flex={1} mx="12px" my="6px">
            <RoundInput
              name="phone"
              value={form.phone.value}
              validator={form.phone.validator}
              placeholder="Enter phone number"
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Box flex={1} mx="12px" my="6px">
            <RoundInput
              name="email"
              value={form.email.value}
              validator={form.email.validator}
              type="email"
              placeholder="Email"
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Box w="100%" px="12px" my="18px">
            <RoundInput
              name="message"
              value={form.message.value}
              validator={form.message.validator}
              type="multiline"
              placeholder="Message"
              onChange={(e) => handleFormChange(e)}
            />
          </Box>
          <Box w="100%" textAlign="center">
            <Button
              maxW="212px"
              h="36px"
              pt="2px"
              px="36px"
              borderRadius="48px"
              textAlign="center"
              bg="primary"
              border="1px solid primary"
              color="white"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.7 }}
              _focus={{}}
              disabled={!formIsValid}
              onClick={handleSend}
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
