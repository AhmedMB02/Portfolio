/*
import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import firebase from '../firebase'; // Adjust the import statement

const ContactMeSection = () => {
  const db = firebase.db; // Use the 'db' export from your firebase.js file

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      comment: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Add the form data to Firestore
        await db.collection("contacts").add({
          firstName: values.firstName,
          email: values.email,
          comment: values.comment,
        });

        // Reset the form on successful submission
        resetForm();

        // You can add any success message or alert here
        console.log("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#5B70A6"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="white">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={formik.isSubmitting}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
*/
import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ton.email@example.com";
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#5B70A6"
      py={24}
      spacing={8}
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          color="white"
          textShadow="0px 0px 10px rgba(255,255,255,0.3)"
        >
          Contact Me
        </Heading>

        <Text color="whiteAlpha.900" fontSize="lg" maxW="600px">
          I’d love to hear from you! Click the button below to send me an email.
        </Text>

        <Button
          colorScheme="purple"
          size="lg"
          px={10}
          py={6}
          fontSize="xl"
          borderRadius="full"
          boxShadow="0px 4px 15px rgba(0,0,0,0.3)"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.4)",
          }}
          onClick={handleEmailClick}
        >
          ✉️ Send me an email
        </Button>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
