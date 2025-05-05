import { Button, FormControl, FormLabel, Input, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sum, removeSum } from '../../Redux/slice/UserSlice';
import Chips from '../Chips';

const Summery = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: '',
    title: '',
    skill: '',
  });
  const { user } = useSelector((state) => state);
  const arr = user.summery.details;

  function changeHandler(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(sum(data));
    const id = data.title;
    setData({
      id: id,
      title: '',
      skill: '',
    });
  }

  function updateSummery(id, name) {
    if (name === 'skill') {
      const curArr = arr.filter((item) => item.id === id);
      setData({
        title: curArr[0].title,
        skill: curArr[0].skill,
      });
      const newArr = arr.filter((item) => item.id !== id);
      dispatch(removeSum(newArr));
    } else {
      return;
    }
  }

  return (
    <VStack as="form" onSubmit={submitHandler} spacing={6} align="stretch" w="full">
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter title e.g. Programming Language"
          name="title"
          value={data.title}
          onChange={changeHandler}
          size="lg"
          variant="filled"
          focusBorderColor="brand.400"
        />
      </FormControl>
      {arr.length > 0 && (
        <Box>
          {arr.map((item, index) => (
            <Chips
              key={index}
              id={item.id}
              name="skill"
              arr={arr}
              updater={removeSum}
              item={index + 1}
              updateHandler={updateSummery}
            />
          ))}
        </Box>
      )}
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Skills</FormLabel>
        <Input
          type="text"
          placeholder="Enter skills e.g. Java, C++"
          name="skill"
          value={data.skill}
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

export default Summery;