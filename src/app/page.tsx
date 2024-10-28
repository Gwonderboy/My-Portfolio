import PrimaryButton from "@/componets/button/primaryBtn";
import Navbar from "@/componets/navbar";
import WelcomeMessage from "@/componets/welcomeText";
import { ABOUT_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";
import { Box, Icon, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const SocialLink = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactElement;
    label: string;
  }) => (
    <Link href={href} isExternal display="flex" alignItems="center" gap={2}>
      <Icon boxSize={5}>{icon}</Icon>
      <Text>{label}</Text>
    </Link>
  );

  return (
    <Box>
      <Navbar />
      <Box
        bg="background"
        color="foreground"
        minH="100vh"
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="center"
        p="3rem"
      >
        <WelcomeMessage />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          w={{ md: "20%" }}
          gap="3rem"
          mt={{ base: "3rem", md: "none" }}
        >
          <VStack
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            mb={4}
          >
            <Text fontSize="xl" fontWeight="bold">
              About Me
            </Text>
            <Text fontSize="sm">
              Software Engineer with a Heart for Problem Solving and an Eye for
              Design.
            </Text>
            <PrimaryButton
              title="About Me"
              icon={<FaArrowRight />}
              href={ABOUT_ROUTE}
            />
          </VStack>
          <VStack
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            mb={4}
          >
            <Text fontSize="xl" fontWeight="bold">
              My Work
            </Text>
            <Text fontSize="sm">
              Check out some of my projects and see what I've been working on.
            </Text>
            <PrimaryButton
              title="Browse Portfolio"
              icon={<FaArrowRight />}
              href={PROJECTS_ROUTE}
            />
          </VStack>
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Follow Me
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
      <Box as="section" background={"secondary"}></Box>
    </Box>
  );
}
