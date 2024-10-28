import {
  Box,
  Text,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import Navbar from "@/componets/navbar";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}


const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <Box>
    <Text size="md" fontWeight={"600"} mb={2}>
      {title}
    </Text>
    <VStack align="start" spacing={1}>
      {skills.map((skill, index) => (
        <Text key={index} fontSize="sm" color="#f1f1f1">
          {skill}
        </Text>
      ))}
    </VStack>
  </Box>
);

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactElement;
  label: string;
}) => (
  <Link href={href} isExternal display="flex" alignItems="center" gap={2} color="text" fontWeight="semibold" _hover={{ color: "primary" }}>
    <Icon boxSize={5} color="primary">
      {icon}
    </Icon>
    <Text>{label}</Text>
  </Link>
);

export default function About() {
  return (
    <Box>
      <Navbar />

      <Box p={8} maxW="1200px" mx="auto">
        {/* Intro Section */}
        <VStack align="start" spacing={4} mb={8}>
          <Box
            style={{ background: "#fff", width: "10rem", height: "0.5rem" }}
          ></Box>
          <Text fontSize={"2.5rem"} fontWeight={"bold"}>
            About Me
          </Text>
          <Text fontSize="lg" color={"#f1f1f1"}>
            Experienced Software Engineer with expertise in software
            architecture, design patterns, and microservices. I am committed to
            building high-quality software solutions that ensure efficiency,
            scalability, and excellent user experiences.
          </Text>
        </VStack>

        {/* Skills Section */}
        <Text fontSize={"1.5rem"} fontWeight={"bold"} mb={4}>
          Technical Expertise
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} color={"#f1f1f1"}>
          <SkillCategory
            title="Technologies"
            skills={["TypeScript", "JavaScript", "Python"]}
          />
          <SkillCategory
            title="Frameworks"
            skills={[
              "React",
              "NodeJS",
              "NextJS",
              "Web3",
              "Rust",
              "Flask",
              "Django",
              "Redux",
            ]}
          />
          <SkillCategory
            title="APIs & Tools"
            skills={[
              "Postman",
              "Swagger",
              "Github",
              "Gitlab",
              "Apache Kafka",
              "Selenium",
              "Terraform",
              "Mocha",
              "Docker",
            ]}
          />
          <SkillCategory
            title="Databases"
            skills={["MySQL", "PostgreSQL", "MongoDB"]}
          />
          <SkillCategory
            title="Cloud"
            skills={["AWS", "Azure", "Google Cloud"]}
          />
        </SimpleGrid>

        {/* Methodologies Section */}
        <Box my={8}>
          <Text fontSize={"1.5rem"} fontWeight={"bold"} mb={4}>
            Methodologies
          </Text>
          <Text fontSize="sm">
            I follow Agile and Scrum methodologies to ensure efficient project
            execution and clear communication across cross-functional teams. My
            commitment to best practices and thorough code reviews helps me
            consistently deliver quality software solutions.
          </Text>
        </Box>

        <Divider my={8} />

        {/* Social Links */}
        <VStack align="start" spacing={4}>
          <Text fontSize={"1.5rem"} fontWeight={"bold"}>
            Find Me Online
          </Text>
          <SocialLink
            href="https://github.com/Gwonderboy"
            icon={<FaGithub />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/victor-ebubechukwu-04b681242"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />
        </VStack>
      </Box>
    </Box>
  );
}
