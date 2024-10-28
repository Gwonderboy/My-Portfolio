import Navbar from "@/componets/navbar";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  image: string;
}

// Example project data, replace these with your actual projects
const projects: ProjectProps[] = [
  {
    title: "MykroGrid",
    description:
      "This electricity application enables customers to register, purchase kilowatts, and monitor usage in real time. Admin tools and Paystack integration enable engineers to oversee customer data and solar generation metrics.",
    techStack: ["React", "NextJS", "Chakra UI", "TypeScript", "Paystack"],
    liveLink: "https://mykrogrid.com/",
    repoLink: "https://github.com/Gwonderboy/mykrogrid",
    image: "/images/mykrogrid.png",
  },
  {
    title: "Gloopro",
    description:
      "A leading eProcurement platform empowering large enterprises to streamline indirect spend management, with features like supply chain visibility and multi-location support.",
    techStack: ["React", "Redux", "NodeJS"],
    liveLink: "https://www.gloopro.com/",
    image: "/icons/gloopro-logo.svg",
  },
  {
    title: "Edumate",
    description:
      "A comprehensive K-12 education management platform that bridges schools, parents, and students, enabling seamless information sharing and student wellbeing tracking.",
    techStack: ["React", "Flask", "MongoDB"],
    liveLink: "https://www.edumate.com.au/",
    image: "/images/edumate.png",
  },
];

const ProjectCard = ({
  title,
  description,
  techStack,
  liveLink,
  repoLink,
  image,
}: ProjectProps) => (
  <Box
    borderWidth="1px"
    borderRadius="md"
    overflow="hidden"
    p={4}
    bg="secondary"
    boxShadow="md"
    transition="transform 0.2s"
    _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
  >
    <Image src={image} w="7rem" h="auto" alt={title}  mb={4} />
    <Text fontSize={"2.5rem"} fontWeight={"bold"} color={"foreground"} mb={2}>
      {title}
    </Text>
    <Text fontSize="sm" color="foreground" mb={4}>
      {description}
    </Text>
    <Text fontWeight="semibold" fontSize="sm" mb={2} color={"forground"}>
      Tech Stack: {techStack.join(", ")}
    </Text>
    <HStack spacing={4}>
      {liveLink && (
        <Link href={liveLink} isExternal color="text" fontWeight="semibold" _hover={{ color: "primary" }}>
          <Icon mr={1} aria-hidden="true">
            <FaExternalLinkAlt />
          </Icon>
          Live Demo
        </Link>
      )}
      {repoLink && (
        <Link href={repoLink} isExternal color="text" fontWeight="semibold" _hover={{ color: "primary" }}>
          <Icon mr={1}>
            <FaGithub />
          </Icon>
          GitHub Repo
        </Link>
      )}
    </HStack>
  </Box>
);

export default function Projects() {
  return (
    <Box>
      <Navbar />

      <Box p={8} maxW="1200px" mx="auto">
        <VStack align="start" spacing={4} mb={8}>
          <Box
            style={{ background: "#fff", width: "10rem", height: "0.5rem" }}
          ></Box>
          <Text fontSize={"2.5rem"} fontWeight={"bold"}>
            My Portfolio
          </Text>
          <Text fontSize="lg" color="#f1f1f1">
            A showcase of some of the notable projects I've worked on, featuring
            web applications, software solutions, and platforms across various
            industries.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
