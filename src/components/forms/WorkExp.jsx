import { Button, FormControl, FormLabel, Input, SimpleGrid, VStack, Textarea, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { work,removeWork } from '../../Redux/slice/UserSlice';
import Chips from '../Chips';

const WorkExp = () => {

  const dispatch=useDispatch();

  const {user}=useSelector((state)=>state);

  const arr=user.workExp.details;

  const[wordData,setWorkData]=useState({
    id:'',
    title:'',
    company:'',
    certificate:'',
    location:'',
    start:'',
    end:'',
    workdecsription:'',

  });
  
  function changeHandler(e)
  {
    setWorkData((prev)=>(
      {
        ...prev,
        [e.target.name]:e.target.value
      }
    ))
  }  

  function submitHandler(e)
  {
    e.preventDefault();

    dispatch(work(wordData));
    const id=wordData.start;
    setWorkData({
      id:id,
      title:'',
      company:'',
      certificate:'',
      location:'',
      start:'',
      end:'',
      workdecsription:'',
    })
  }



  function updateHandler(id,name)
  {
    if(name==='workexp')
    {
      const currentData=arr.filter((item)=>item.id ===id);
       setWorkData({
        title:currentData[0].title,
        company:currentData[0].company,
        certificate:currentData[0].certificate,
        location:currentData[0].location,
        start:currentData[0].start,
        end:currentData[0].end,
        workdecsription:currentData[0].workdecsription,
      });
  
      const newData=arr.filter((item)=>item.id!==id);
      dispatch(removeWork(newData));
    }
    else {
      return;
    }
 
  }

  return (
    <VStack as="form" onSubmit={submitHandler} spacing={6} align="stretch" w="full">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter title e.g. Frontend Engineer"
            name="title"
            value={wordData.title}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Company Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter company name"
            name="company"
            value={wordData.company}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      {arr.length > 0 && (
        <Box>
          {arr.map((item, index) => (
            <Chips
              key={index}
              id={item.id}
              name={"workexp"}
              item={index + 1}
              arr={arr}
              updater={removeWork}
              updateHandler={updateHandler}
            />
          ))}
        </Box>
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Certificate Link</FormLabel>
          <Input
            type="text"
            placeholder="Enter certificate link"
            name="certificate"
            value={wordData.certificate}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Location</FormLabel>
          <Input
            type="text"
            placeholder="Enter location e.g. Remote"
            name="location"
            value={wordData.location}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Start Date</FormLabel>
          <Input
            type="date"
            name="start"
            value={wordData.start}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">End Date</FormLabel>
          <Input
            type="date"
            name="end"
            value={wordData.end}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Work Description</FormLabel>
        <Textarea
          name="workdecsription"
          value={wordData.workdecsription}
          onChange={changeHandler}
          placeholder="Describe your work..."
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

export default WorkExp;