import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "Coding Night 2023",
    description:
      "On December 2023, I participated in Info Night 2023, an engaging event that brought together students and technology enthusiasts to explore innovative ideas and showcase creative projects. This experience allowed me to collaborate with peers, exchange knowledge, and apply my problem-solving skills in a dynamic and inspiring environment. It was also an excellent opportunity to strengthen my teamwork and communication abilities while being exposed to new perspectives in the tech field.",
    getImageSrc: () => require("../images/nuitInfo2023.jpg"),
  },
  {
    title: "Kantaoui Race",
    description:
      "On February 14, 2023, I had the opportunity to participate in the Kantaoui Race as a member of Delta Club. This experience was both a personal challenge and a chance to share the values of teamwork, endurance, and determination alongside fellow athletes. Taking part in such a dynamic event strengthened my resilience and highlighted the importance of discipline and perseverance in achieving goals.",
    getImageSrc: () => require("../images/KantaouiRace.jpg"),
  },
  {
    title: "Coding Moon Challenge",
    description:
      "On February 18, 2023, I participated in the Coding Moon Challenge at EPI Digital Sousse. This competition, similar to an “Info Night,” brought together students and tech enthusiasts to collaborate, solve problems, and showcase creativity in coding. It was a valuable opportunity to test my skills under time constraints, exchange ideas with peers, and strengthen my ability to think critically while working in a competitive yet inspiring environment.",
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
        gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))" }}
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