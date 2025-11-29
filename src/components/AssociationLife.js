import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const associationL = [
  {
    title: "Delta Club",
    description:
      "Member from 2021 to 2024, with 3 years of active participation in Delta Club activities. From 2023 to 2024, I served as Media Director, leading the media department, managing communication content, and supporting the club’s visibility through creative and digital initiatives. This role strengthened my leadership, teamwork, and digital communication skills while contributing to the growth and impact of the club.",
    getImageSrc: () => require("../images/deltaClub.jpg"),
  },
  {
    title: "Member in American Corner Sousse",
    description:
      "Since December 2024, I have been a member of The American Corner in Sousse, a cultural and educational hub dedicated to promoting knowledge about the United States. This membership has provided me with access to rich learning resources, cultural exchange programs, and engaging events that have enhanced both my academic growth and personal development.",
    getImageSrc: () => require("../images/AC.jpg"),
  },
  {
    title: "Member in Technical department COPRO Club at EPI Sousse",
    description:
      "",
    getImageSrc: () => require("../images/copro.jpg"),
  },
];

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="#ffffffff"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" mb={4} />
      <Heading as="h2" size="md" mb={2} color="black">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

const AssociationLifeSection = () => {
  return (
    <FullScreenSection
     backgroundColor="#42378dff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="AssociationLife-section" color="white">
        Association Life
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {associationL.map((associationL, index) => (
          <Card
            key={index}
            title={associationL.title}
            description={associationL.description}
            imageSrc={associationL.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};
export default AssociationLifeSection ;