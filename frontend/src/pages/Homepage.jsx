import {
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
  TableContainer,
  TableCaption,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
  Table,
  Checkbox,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteApi, postApi } from "../redux/action";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [mailData, setmailData] = useState([]);

  // for modal states
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [profiles, setprofiles] = useState([]);

  const dispatch = useDispatch();

  // extracing data from form
  const handleCange = (e) => {
    const { name, value } = e.target;
    const payload = { ...data, [name]: value };
    setData(payload);
  };

  const handleSave = async (e) => {
    await dispatch(postApi(data));
    await fetchData();
    setData([]);
  };

  // for deleting
  const handleDelete = async (id) => {
    await dispatch(deleteApi(id));
    await fetchData();
  };

  const sendEmail = () => {
    var templateParams = {
      ...mailData.profiles,
    };
    emailjs
      .send(
        "service_mcyrban",
        "template_t9sxzom",
        templateParams,
        "QOmiGUmA2IiTnhdpg"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleCheck = (profiles) => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setmailData({ ...mailData, profiles });
    }
  };

  const fetchData = async () => {
    await axios
      .get("https://dull-red-gharial-robe.cyclic.app/user")
      .then((res) => setprofiles(res.data.profiles))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
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
            onClick={sendEmail}
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

            <ModalFooter w="60%" gap={2} m="auto">
              <Button
                onClick={(e) => handleSave(e)}
                variant="outline"
                colorScheme="green"
              >
                Save
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* modal ends here  */}
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
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {profiles &&
              profiles.map((el, i) => (
                <Tr key={el._id}>
                  <Td>
                    <Checkbox
                      onChange={() => handleCheck(el)}
                      colorScheme="green"
                    />
                  </Td>
                  <Td>{i + 1}</Td>
                  <Td>{el.name}</Td>
                  <Td>{el.no}</Td>
                  <Td>{el.email}</Td>
                  <Td>{el.hobbies}</Td>

                  <Td>
                    <Button
                      onClick={(e) => handleDelete(el._id)}
                      variant="ghost"
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Homepage;
