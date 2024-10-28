"use client";

import PrimaryButton from "@/componets/button/primaryBtn";
import Navbar from "@/componets/navbar";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmailLink = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast({
        title: "Please fill out all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:vebubechukwu@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Clear form fields after sending the email
    setFormData({ name: "", email: "", message: "" });
    toast({
      title: "Message sent!",
      description: "Your email has been opened for sending.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />
      <Box maxW="600px" mx="auto" p={8}>
        <VStack spacing={4} align="start" mb={8}>
          <Box style={{ background: "#fff", width: "10rem", height: "0.5rem" }}></Box>
          <Text fontSize={"2.5rem"} fontWeight={"bold"}>
            Contact Me
          </Text>
          <Text color="text">
            I'd love to hear from you! Fill out the form below, and I'll get
            back to you as soon as possible.
          </Text>

          <FormControl id="name">
            <FormLabel color="text">Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              bg="transparent"
              color="text"
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="text">Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              bg="transparent"
              color="text"
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="text">Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              bg="transparent"
              color="text"
            />
          </FormControl>

          <PrimaryButton title={"Send Message"} onClick={handleEmailLink} mt={4} />
        </VStack>
      </Box>
    </Box>
  );
}
