/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon: faGithub,
    url: "https://github.com/AhmedMB02",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmed-mbarek-05ba27256/",
  },

];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("projects")();
                }}
              >
                Projects
              </a>
              <a
                href="/#Competition"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("Competition")();
                }}
              >
                Competitions
              </a>
              <a
                href="/#AssociationLife"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("AssociationLife")();
                }}
              >
                Association Life
              </a>
              <a
                href="/#Certification"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("Certification")();
                }}
              >
                Certifications
              </a>
              <a
                href="/#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contactme")();
                }}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/AhmedMB02",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmed-mbarek-05ba27256/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}  // ✅ Fix: le header reste toujours au-dessus
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("projects")();
                }}
              >
                Projects
              </a>
              <a
                href="/#Competition"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("Competition")();
                }}
              >
                Competitions
              </a>
              <a
                href="/#AssociationLife"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("AssociationLife")();
                }}
              >
                Association Life
              </a>
              <a
                href="/#Certification"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("Certification")();
                }}
              >
                Certifications
              </a>
              <a
                href="/#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contactme")();
                }}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/AhmedMB02",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmed-mbarek-05ba27256/",
  },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="9999"
      backgroundColor="#18181b"
      boxShadow="md"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Réseaux sociaux */}
          <HStack spacing={4}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </HStack>

          {/* Menu desktop */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            fontWeight="500"
          >
            <a href="/#projects" onClick={(e) => { e.preventDefault(); handleClick("projects")(); }}>Projects</a>
            <a href="/#Competition" onClick={(e) => { e.preventDefault(); handleClick("Competition")(); }}>Competitions</a>
            <a href="/#AssociationLife" onClick={(e) => { e.preventDefault(); handleClick("AssociationLife")(); }}>Association Life</a>
            <a href="/#Certification" onClick={(e) => { e.preventDefault(); handleClick("Certification")(); }}>Certifications</a>
            <a href="/#contact-me" onClick={(e) => { e.preventDefault(); handleClick("contactme")(); }}>Contact Me</a>
          </HStack>

          {/* Menu mobile */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            backgroundColor="transparent"
            _hover={{ backgroundColor: "gray.700" }}
          />
        </HStack>
      </Box>

      {/* Drawer (menu latéral mobile) */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="#18181b" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Button variant="link" onClick={handleClick("projects")}>Projects</Button>
              <Button variant="link" onClick={handleClick("Competition")}>Competitions</Button>
              <Button variant="link" onClick={handleClick("AssociationLife")}>Association Life</Button>
              <Button variant="link" onClick={handleClick("Certification")}>Certifications</Button>
              <Button variant="link" onClick={handleClick("contactme")}>Contact Me</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
