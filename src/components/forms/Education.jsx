import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, SimpleGrid, VStack, Textarea, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { edu, removeEdu } from '../../Redux/slice/UserSlice';
import Chips from '../Chips';

const Education = () => {
  const [data, setData] = useState({
    id: '',
    title: '',
    institution: '',
    start: '',
    end: '',
    marks: '',
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const eduArr = user.education.details;

  function changeHandler(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function educationUpdate(id, name) {
    if (name === 'education') {
      const currenData = eduArr.filter((item) => item.id === id);
      setData({
        title: currenData[0].title,
        institution: currenData[0].institution,
        start: currenData[0].start,
        end: currenData[0].end,
        marks: currenData[0].marks,
      });
      const newData = eduArr.filter((item) => item.id !== id);
      dispatch(removeEdu(newData));
    } else {
      return;
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(edu(data));
    const id = data.start;
    setData({
      id: id,
      title: '',
      institution: '',
      start: '',
      end: '',
      marks: '',
    });
  }

  return (
    <VStack as="form" onSubmit={submitHandler} spacing={6} align="stretch" w="full">
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter course name e.g. BTech"
          name="title"
          value={data.title}
          onChange={changeHandler}
          size="lg"
          variant="filled"
          focusBorderColor="brand.400"
        />
      </FormControl>
      {eduArr.length > 0 && (
        <Box>
          {eduArr.map((item, index) => (
            <Chips
              key={index}
              id={item.id}
              name="education"
              item={index + 1}
              arr={eduArr}
              updater={removeEdu}
              updateHandler={educationUpdate}
            />
          ))}
        </Box>
      )}
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Institution</FormLabel>
        <Input
          type="text"
          placeholder="Enter institution name"
          name="institution"
          value={data.institution}
          onChange={changeHandler}
          size="lg"
          variant="filled"
          focusBorderColor="brand.400"
        />
      </FormControl>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Start</FormLabel>
          <Input
            type="date"
            name="start"
            value={data.start}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">End</FormLabel>
          <Input
            type="date"
            name="end"
            value={data.end}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Percentage / CGPA</FormLabel>
        <Input
          type="text"
          placeholder="Enter percentage or CGPA"
          name="marks"
          value={data.marks}
          onChange={changeHandler}
          size="lg"
          variant="filled"
          focusBorderColor="brand.400"
        />
      </FormControl>
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

export default Education;