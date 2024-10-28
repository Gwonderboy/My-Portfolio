"use client";

import Image from "next/image";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import menuItems from "@/_data/menuItems";
import { Logo } from "@/assets";
import "./style.css";
import { usePathname } from "next/navigation";

const NavLink = ({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname(); // Get the current route path
  const isActive = pathname === href;
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{ textDecoration: "none" }}
      href={href}
      className="nav_links"
      color={isActive ? "primary" : "inherit"}
      fontWeight={isActive ? "bold" : "normal"}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={"2rem"}
      >
        <HStack spacing={2} alignItems="center">
          <Logo color="#0a5fe4" />{" "}
          <Text fontSize={"1.5rem"} fontWeight={"900"}>
            Peace Codes
          </Text>
        </HStack>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {menuItems.map((link) => (
              <NavLink key={link.name} href={link.url}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <IconButton
            size="md"
            icon={isOpen ? <IoMdClose /> : <TiThMenu />}
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={onToggle}
            fontSize={"2rem"}
            alignItems={"center"}
          />
        </HStack>
      </Flex>

      {isOpen && (
        <Box py={4} display={{ md: "none" }} textAlign={"center"} bg="secondary">
          <Stack as="nav" spacing={4}>
            {menuItems.map((link) => (
              <NavLink key={link.name} href={link.url}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
