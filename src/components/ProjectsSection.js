import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST Mobile Application",
    description: [
      "First try at developing a Quiz mobile application for students to improve their knowledge",
      "- Technologies used: Flutter (Dart language)",
      "- Interactive and engaging user interface for a better user experience",
      "- Cross-platform mobile development for Android and iOS",
    ],
    videoSrc: require("../videos/GoQUESTEdited.mp4"),
  },
  {
    title: "Final year project ",
    description: [
      "Development of an intelligent mobile application",
      "-Technologies used: Kotlin, Django, Tensorflow",
      "Task management system",
      "AI-powered features for productivity",
    ],
    videoSrc: require("../videos/AGTIA.mp4"),
  },
];

const Card = ({ title, description, videoSrc }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      {/* ✅ Même style que les autres cards, mais avec vidéo */}
      <Box borderRadius="md" overflow="hidden" mb={4}>
        <video
          controls
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

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
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
      </Heading>

      {/* ✅ Même disposition en grille que dans la section Competitions */}
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
            videoSrc={project.videoSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;