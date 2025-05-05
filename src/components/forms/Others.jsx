import { Button, FormControl, FormLabel, Input, VStack, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { othr } from '../../Redux/slice/UserSlice'

const Others = () => {
  
  const dispatch=useDispatch();
  const[data,setData]=useState({
   title:'',
   description:''
  });

  function changeHandler(e){
    setData((prev)=>(
      {
        ...prev ,
        [e.target.name]:e.target.value
      }
    ))
  }

  function submitHandler(e)
  {
    e.preventDefault();
    dispatch(othr(data));
   
    setData({
      title:'',
      description:''
    });
    
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
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Description</FormLabel>
        <Textarea
          name="description"
          value={data.description}
          onChange={changeHandler}
          placeholder="Enter description..."
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
  )
}

export default Others;