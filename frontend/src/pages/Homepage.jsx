import {
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
  Table,
  Checkbox,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Textarea,
  useDisclosure,
  ModalContent,
} from "@chakra-ui/react";

import React, { useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);

  // for modal states
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  // extracing data from form
  const handleCange = (e) => {
    const { name, value } = e.target;
    const payload = { ...data, [name]: value };
    setData(payload);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(data);
    setData([]);
  };

  return (
    <>
      <TableContainer w="90%" m={"auto"}>
        <Stack mt={4} w="20%" direction="row">
          <Button
            size={["xl", "lg", "md"]}
            onClick={onOpen}
            colorScheme={"green"}
            variant={"outline"}
          >
            Add new Data
          </Button>{" "}
          <br />
          <Button
            size={["xl", "lg", "md"]}
            variant={"outline"}
            colorScheme="teal"
          >
            Send Data
          </Button>
        </Stack>

        {/* Modal code  */}
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Your Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        onChange={(e) => handleCange(e)}
                        type="text"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        name="no"
                        onChange={(e) => handleCange(e)}
                        type="number"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        name="email"
                        onChange={(e) => handleCange(e)}
                        type="email"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Hobbies</FormLabel>
                      <Textarea
                        name="hobbies"
                        onChange={(e) => handleCange(e)}
                        type="text"
                      />
                    </FormControl>
                  </Stack>
                </Box>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                onClick={(e) => handleSave(e)}
                variant="outline"
                colorScheme="green"
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* modal ends here  */}

        {/* table starts here  */}
        <Table variant="striped" colorScheme="teal">
          <TableCaption>User Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Select</Th>
              <Th>Serial No</Th>
              <Th>Name</Th>
              <Th>Phone No</Th>
              <Th>Email</Th>
              <Th>Hobbies</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox colorScheme="green" />
              </Td>
              <Td>1</Td>
              <Td>Pawan</Td>
              <Td>9075565252</Td>
              <Td>pwn@gmail.com</Td>
              <Td>Chess</Td>
              <Td>
                <Button variant="ghost" colorScheme="blue">
                  Update
                </Button>
              </Td>
              <Td>
                <Button variant="ghost" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* table ends here  */}
    </>
  );
};

export default Homepage;
