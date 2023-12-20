import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "Info Night 2023",
    description:
      "Great experience",
    getImageSrc: () => require("../images/nuitInfo2023.jpg"),
  },
  {
    title: "Kantaoui Race",
    description:
      "February,14 2023",
    getImageSrc: () => require("../images/KantaouiRace.jpg"),
  },
  {
    title: "Coding Moon Challenge",
    description:
      "February,18 2023",
    getImageSrc: () => require("../images/codingmoonchallenge2.jpg"),
  },
  
];

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="#ffffff"
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

const ProjectsSection = () => {
  return (
    <FullScreenSection
     backgroundColor="#5B70A6"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="Competition-section" color="white">
        Competitions
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

