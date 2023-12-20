import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="#ffffff"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      padding={4}
      alignItems="flex-start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" maxH="200px" />
      <VStack alignItems="flex-start" spacing={2} w="100%">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack alignSelf="flex-end">
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
        <Text color="blue.500">Learn More</Text>
      </HStack>
    </VStack>
  );
};

export default Card;
