import { Button, FormControl, FormLabel, Input, SimpleGrid, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import { basic } from '../../Redux/slice/UserSlice';
import { useDispatch } from 'react-redux';

const BasicInfo = () => {
  const dispatch = useDispatch();

  const [infodata, setInfoData] = useState({
    name: '',
    designation: '',
    github: '',
    linkedin: '',
    email: '',
    phone: '',
  });

  function chnageHandler(event) {
    setInfoData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submithandler(e) {
    e.preventDefault();
    dispatch(basic(infodata));
    setInfoData({
      name: '',
      designation: '',
      github: '',
      linkedin: '',
      email: '',
      phone: '',
    });
  }

  return (
    <VStack as="form" onSubmit={submithandler} spacing={6} align="stretch" w="full">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Name</FormLabel>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={infodata.name}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Designation</FormLabel>
          <Input
            type="text"
            placeholder="Title e.g. Frontend Developer"
            name="designation"
            value={infodata.designation}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Github Link</FormLabel>
          <Input
            type="text"
            placeholder="Github profile link"
            name="github"
            value={infodata.github}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Linkedin Link</FormLabel>
          <Input
            type="text"
            placeholder="Linkedin profile link"
            name="linkedin"
            value={infodata.linkedin}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Email</FormLabel>
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            value={infodata.email}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Phone</FormLabel>
          <Input
            type="tel"
            placeholder="Phone number"
            name="phone"
            value={infodata.phone}
            onChange={chnageHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <Button
        type="submit"
        colorScheme="brand"
        size="lg"
        alignSelf="flex-start"
        mt={4}
        px={8}
        fontWeight="bold"
        borderRadius="lg"
      >
        Save
      </Button>
    </VStack>
  );
};

export default BasicInfo;
