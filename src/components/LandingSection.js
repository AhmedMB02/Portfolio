import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Ahmed";
const bio1 = "First year Software Engineering student at EPI - International Multidisciplinary School ";
const bio2 = "and this is my portfolio";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2B255D"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" src={require("../images/image Ahmed.png")} />
      <Heading as="h1" size="xl" textAlign="center" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" textAlign="center" color="white">
        {bio1}
      </Heading>

      <Heading as="h2" size="2xl" textAlign="center" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
