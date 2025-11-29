
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "AWS Cloud Practitioner Essentiels",
    description:
      "Certified in foundational cloud computing concepts, including AWS services, cloud architecture, and best practices. This program provided essential knowledge for deploying, managing, and understanding cloud-based solutions.",
    getImageSrc: () => require("../images/aws cloud.png"),
  },
  {
    title: "Meta Front-end Developer",
    description:
      "Certified in building responsive and interactive web applications using HTML, CSS, JavaScript, and React, with hands-on experience in UI design and collaborative development.",
    getImageSrc: () => require("../images/coursera.png"),
  },
  {
    title: "Project-Management Entrepreneuriat",
    description:
      "Among The Youth Leaders Network Project Implemented by YALD association A PART FROM MA3AN PROJECT",
    getImageSrc: () => require("../images/trainig.jpg"),
  },
  {
    title: "Gemini 3 - Unlock Your Fullest Potential",
    description:
      "This certification confirms advanced proficiency in the Gemini 3 platform, focusing on its application for personal and professional development. It validates the critical skill of expert prompt engineering, specifically utilizing the PCTF framework (Purpose, Context, Task, Format) to optimize outputs, alongside a thorough understanding of how the Gemini model works at its core. Holders are certified to leverage these capabilities for enhanced productivity, creative problem-solving, and achieving ambitious objectives.",
    getImageSrc: () => require("../images/certif gemini3.jpg"),
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

const ProjectsSection = () => {
  return (
    <FullScreenSection
     backgroundColor="#332975"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="Certification-section" color="white">
        Certifications & trainings
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

