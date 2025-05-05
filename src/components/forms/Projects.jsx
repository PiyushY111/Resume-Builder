import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, SimpleGrid, VStack, Textarea, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { project, removeProject } from '../../Redux/slice/UserSlice';
import Chips from '../Chips';

const Projects = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const arr = user.projects.details;

  const [projectdata, setProjectdata] = useState({
    id: '',
    project_title: '',
    deloyed_link: '',
    github_link: '',
    project_description: '',
  });

  function changeHandler(e) {
    setProjectdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(project(projectdata));
    const id = projectdata.project_title;
    setProjectdata({
      id: id,
      project_title: '',
      deloyed_link: '',
      github_link: '',
      project_description: '',
    });
  }

  function projectUpdateHandler(id, name) {
    if (name === 'project') {
      const curData = arr.filter((item) => item.id === id);
      setProjectdata({
        project_title: curData[0].project_title,
        deloyed_link: curData[0].deloyed_link,
        github_link: curData[0].github_link,
        project_description: curData[0].project_description,
      });
      const newData = arr.filter((item) => item.id !== id);
      dispatch(removeProject(newData));
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
          placeholder="Enter project title"
          name="project_title"
          value={projectdata.project_title}
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
              name="project"
              item={index + 1}
              updater={removeProject}
              updateHandler={projectUpdateHandler}
              arr={arr}
            />
          ))}
        </Box>
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Deployed Link</FormLabel>
          <Input
            type="text"
            placeholder="Enter deployed link of project"
            name="deloyed_link"
            value={projectdata.deloyed_link}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="brand.600">Github Link</FormLabel>
          <Input
            type="text"
            placeholder="Enter github link of your project"
            name="github_link"
            value={projectdata.github_link}
            onChange={changeHandler}
            size="lg"
            variant="filled"
            focusBorderColor="brand.400"
          />
        </FormControl>
      </SimpleGrid>
      <FormControl>
        <FormLabel fontWeight="bold" color="brand.600">Project Description</FormLabel>
        <Textarea
          name="project_description"
          value={projectdata.project_description}
          onChange={changeHandler}
          placeholder="Describe your project..."
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

export default Projects;