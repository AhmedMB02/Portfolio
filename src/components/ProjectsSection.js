/*
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST",
    description:
      "GoQUEST is an application of quiz developed by Framework Flutter",
      getVideoSrc: () => require("../videos/GoQUEST (online-video-cutter.com).mp4"),
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
      <video width="10%" height="auto" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Heading as="h2" size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

const ProjectsSection = () => {
  return (
    <FullScreenSection
     // backgroundColor="#14532d"
     backgroundColor="#5B70A6"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="black">
        Featured Projects
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

*/

















/*
import React from "react";
import { Box, Heading, Text, Image, video } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST",
    description:
      "GoQUEST is an application of quiz developed by Framework Flutter",
    getImageSrc: () => require("../images/photo1.jpg"),
    getVideoSrc: () => require("../videos/GoQUEST (online-video-cutter.com).mp4"),
  },
  
];

const Card = ({ title, description, imageSrc, videoSrc }) => {
  return (
    <Box
      width="100%" // Set the width to 100%
      backgroundColor="#ffffff"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      {videoSrc ? (
        <video width="100%" height="auto" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image src={imageSrc} alt={title} borderRadius="md" mb={4} />
      )}
      <Heading as="h2" size="md" mb={2}>
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
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
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
            videoSrc={project.getVideoSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
*/





/////////////////////////////////////////////////////////////////////////////
















/*
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST",
    description:
      "GoQUEST is an application of quiz developed by Framework Flutter",
    getImageSrc: () => require("../images/coursera.png"),
  },
  {
    title: "GoQUEST",
    description:
      "GoQUEST is an application of quiz developed by Framework Flutter",
    getImageSrc: () => require("../images/trainig.jpg"),
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
      <Heading as="h2" size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

const ProjectsSection = () => {
  return (
    <FullScreenSection
     // backgroundColor="#14532d"
     backgroundColor="#332975"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
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

*/
















//-------------------------------------------------------------------------------------
/*
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST",
    description: "GoQUEST is an application of quiz developed by Framework Flutter",
    videoSrc: require("../videos/GoQUEST1.mp4"),
  },
  {
    title: "Calculator with react",
    description: "Calculator developped by React",
    videoSrc: require("../videos/calculator.mp4"),
  },
];

const Card = ({ title, description, videoSrc }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      borderRadius="lg"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      padding={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box position="relative" height="350px">
        <video width="38%" height="10%" controls>
        <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Heading as="h2" size="md" my={2}>
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
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
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
            videoSrc={project.videoSrc}
           // imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
*/
// <video width="100%" height="100%" controls>
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "GoQUEST",
    description: "GoQUEST is a quiz application developed with Flutter",
    videoSrc: require("../videos/GoQUESTEdited.mp4"),
  },
  {
    title: "Calculator with React",
    description: "A simple calculator developed with React",
    videoSrc: require("../videos/Calcul.mp4"),
  },
  {
    title: "Calculator with React",
    description: "A simple calculator developed with React",
    videoSrc: require("../videos/Calcul.mp4"),
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