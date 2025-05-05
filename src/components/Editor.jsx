import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useTab, useMultiStyleConfig, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import BasicInfo from './forms/BasicInfo';
import WorkExp from './forms/WorkExp';
import Education from './forms/Education';
import Projects from './forms/Projects';
import Achivements from './forms/Achivements';
import Summary from './forms/Summery';
import Others from './forms/Others';

const Editor = ({ sections }) => {
  const components = {
    basisinfo: BasicInfo,
    education: Education,
    workExp: WorkExp,
    project: Projects,
    achivement: Achivements,
    summery: Summary,
    other: Others,
  };
  const sectionKeys = Object.keys(sections);

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="2xl"
      p={[4, 8]}
      maxW="900px"
      mx="auto"
      my={8}
      transition="all 0.3s"
    >
      <Tabs
        variant="soft-rounded"
        colorScheme="brand"
        isFitted
        align="center"
        size="lg"
        defaultIndex={0}
      >
        <TabList mb={6} boxShadow="sm" borderRadius="lg" bg="brand.100" p={2}>
          {sectionKeys.map((key) => (
            <Tab
              key={key}
              fontWeight="semibold"
              fontSize={["md", "lg"]}
              borderRadius="md"
              _selected={{
                color: 'white',
                bg: 'brand.500',
                boxShadow: 'md',
              }}
              _focus={{ boxShadow: 'outline' }}
              mx={1}
              px={[2, 4]}
              py={2}
              transition="all 0.2s"
            >
              {sections[key]}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {sectionKeys.map((key) => (
            <TabPanel key={key} px={0}>
              <Box
                as={VStack}
                align="stretch"
                spacing={6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition="all 0.3s"
              >
                {React.createElement(components[key])}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Editor;
