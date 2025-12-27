
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "AWS Cloud Practitioner Essentiels",
    description: [
      "Certified in foundational cloud computing concepts",
      "AWS services, cloud architecture, and best practices",
      "Essential knowledge for deploying, managing, and understanding cloud-based solutions",
    ],
    getImageSrc: () => require("../images/aws cloud.png"),
  },
  {
    title: "Meta Front-End Developer – Professional Certificate",
    description: [
      "Professional certificate offered by Meta through Coursera",
      "Skills acquired :",
      "- Comprehensive 9-course program focused on modern front-end web development",
      "- Strong foundation in HTML, CSS, and JavaScript for responsive web applications",
      "- Hands-on experience with React, advanced component-based architecture, and state management",
      "- Understanding of version control using Git and GitHub",
      "- Introduction to UX/UI design principles and best practices",
      "- Capstone project demonstrating real-world front-end development skills",
      "- Preparation for entry-level front-end developer roles and technical interviews"

    ],
    getImageSrc: () => require("../images/coursera.png"),
  },
  {
    title: "Project-Management Entrepreneuriat",
    description: [
      "Certification in Project Management and Entrepreneurship held at Polytechnique Sousse.",
      "Organized in collaboration with the Polytech Entrepreneurship Club.",
      "Focused on project planning, teamwork, leadership, and entrepreneurial mindset.",
    ],
    getImageSrc: () => require("../images/trainig.jpg"),
  },
  {
    title: "Gemini 3 - Unlock Your Fullest Potential",
    description: [
      "Organized by : GDG (Google Developer Group) On Campus EPI",
      "Date : Novembre, 27th 2025",
      "Location : EPI School, Sousse, Tunisie",
      "Skills acquired :",
      "- Advanced understanding of the Gemini 3 large language model and its capabilities",
      "- Hands-on prompt engineering using the PCTF framework (Purpose, Context, Task, Format)",
      "- Exposure to real-world AI use cases and Google AI ecosystem tools",
    ],
    getImageSrc: () => require("../images/certif gemini3.jpg"),
  },
  {
    title: "AI Fundamentals Workshop – IEEE",
    description: [
      "Organized by : IEEE EPI CIS (Computational Intelligence Society) – IEEE EPI Student Branch",
      "Date : Decembre, 13th 2025",
      "Location : EPI School, Sousse, Tunisie",
      "Objective : Introduction to the fundamentals of Artificial Intelligence",
      "Skills acquired :",
      "- Theoretical foundations of AI",
      "- Ability to understand intelligent systems",
      "- Understanding of Machine Learning principles",
      "- Understanding of Deep Learning principles",
    ],
    getImageSrc: () => require("../images/certif fond ia IEEE.jpg"),
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
      <Box color="gray.600">
        {description.map((item, index) => (
          <Text key={index} mb={1}>
            {item}
          </Text>
        ))}
      </Box>
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

