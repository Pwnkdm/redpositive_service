import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            justifyContent={"flex-start"}
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Avatar
                size="lg"
                name="Redpositive service Private Limited"
                src="https://www.redpositive.in/images/redpositive_logo1.png"
              />
            </Box>

            <Stack direction="row">
              <Text fontWeight={"bold"}>REDPOSITIVE</Text>
            </Stack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
