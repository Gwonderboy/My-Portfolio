"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Text } from "@chakra-ui/react";

const WelcomeMessage = () => {
  return (
    <Box
      p={4}
      display={"flex"}
      flexDir={"column"}
      alignItems={"left"}
      textAlign={"left"}
      maxWidth="600px"
      mx="auto"
    >
      <Box
        style={{ background: "#fff", width: "10rem", height: "0.5rem" }}
      ></Box>
      <Text fontSize="2xl" fontWeight="bold" my={4}>
        Hello!
      </Text>
      <Text fontSize="2.5rem" fontWeight="bold">
        I'm Victor Ebubechukwu,
      </Text>
      <Text fontSize="2rem" fontWeight="bold" mb={4}>
        a Web Developer
      </Text>
      <Typewriter
        words={[
          "Experienced Software Engineer with deep expertise in software architecture, design patterns, and microservices.",
          "Leveraging Agile and Scrum methodologies to deliver high-quality software solutions.",
          "Committed to quality in code reviews and best practices.",
        ]}
        loop={false} // Set to true if you want the text to repeat
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </Box>
  );
};

export default WelcomeMessage;
