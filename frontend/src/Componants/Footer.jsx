import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  Avatar,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("red.400")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <WrapItem>
            <Avatar
              size="2xl"
              name="Redpositive service Private Limited"
              src="https://www.redpositive.in/images/redpositive_logo1.png"
            />
            <Flex flexDirection="column" mt="10%">
              <Text fontWeight="bold" color="white">
                REDPOSIVE
              </Text>
              <hr />
              <Text fontWeight="normal" color="white">
                SERVICE OPC PRIVATE LIMITED
              </Text>
            </Flex>
          </WrapItem>
          <Text>© 2022 All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Icon cursor="pointer" boxSize={10} label={"Twitter"} href={"#"}>
              <FaTwitter />
            </Icon>
            <Icon cursor="pointer" boxSize={10} label={"YouTube"} href={"#"}>
              <FaYoutube />
            </Icon>
            <Icon cursor="pointer" boxSize={10} label={"Instagram"} href={"#"}>
              <FaInstagram />
            </Icon>
          </Stack>
        </Container>
      </Box>{" "}
    </>
  );
};

export default Footer;
