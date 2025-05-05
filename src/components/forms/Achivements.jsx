import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, VStack, Textarea, Box } from '@chakra-ui/react';
import { achieve, removeAchive } from '../../Redux/slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import Chips from '../Chips';

const Achivements = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: '',
    title: '',
    description: '',
  });
  const { user } = useSelector((state) => state);
  const arr = user.achievements.details;

  function changeHandler(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(achieve(data));
    const id = data.title;
    setData({
      id: id,
      title: '',
      description: '',
    });
  }

  function updateAchive(id, name) {
    if (name === 'achivement') {
      const curArr = arr.filter((item) => item.id === id);
      setData({
        title: curArr[0].title,
        description: curArr[0].description,
      });
      const newData = arr.filter((item) => item.id !== id);
      dispatch(removeAchive(newData));
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
          placeholder="Enter section title"
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
              name="achivement"
              arr={arr}
              updater={removeAchive}
              updateHandler={updateAchive}
              item={index + 1}
            />
          ))}
        </Box>
      )}
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Details</FormLabel>
        <Textarea
          name="description"
          value={data.description}
          onChange={changeHandler}
          placeholder="Describe your achievement..."
          size="lg"
          variant="filled"
          focusBorderColor="brand.400"
          rows={6}
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

export default Achivements;