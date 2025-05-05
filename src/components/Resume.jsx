import React from 'react';
import Projects from './resume components/projects/Projects';
import EducatioDetails from './resume components/education/EducatioDetails';
import BasicDeatils from './resume components/BasicDeatils';
import EcperienceDetails from './resume components/experience/EcperienceDetails';
import AchiveDetails from './resume components/achivement/AchiveDetails';
import SkillDetails from './resume components/skills/SkillDetails';
import OtherDetails from './resume components/other/OtherDetails';
import { Box, VStack, Heading, Divider } from '@chakra-ui/react';
import { FaGraduationCap, FaProjectDiagram, FaBriefcase, FaAward, FaTools, FaUser } from 'react-icons/fa';

const SectionHeader = ({ icon, children }) => (
  <Heading
    as="h2"
    size="lg"
    color="brand.600"
    display="flex"
    alignItems="center"
    gap={2}
    mb={2}
    mt={6}
    fontWeight="bold"
    letterSpacing="tight"
  >
    {icon}
    {children}
  </Heading>
);

const Resume = () => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="2xl"
      p={[4, 8]}
      maxW="900px"
      mx="auto"
      my={8}
      minH="50rem"
      border="1px solid"
      borderColor="brand.100"
    >
      <VStack align="stretch" spacing={6}>
        <Box mb={2}>
          <SectionHeader icon={<FaUser color="#7c8fd1" />}>Basic Details</SectionHeader>
          <BasicDeatils />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaGraduationCap color="#7c8fd1" />}>Education</SectionHeader>
          <EducatioDetails />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaTools color="#7c8fd1" />}>Skills</SectionHeader>
          <SkillDetails />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaProjectDiagram color="#7c8fd1" />}>Projects</SectionHeader>
          <Projects />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaBriefcase color="#7c8fd1" />}>Experience</SectionHeader>
          <EcperienceDetails />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaAward color="#7c8fd1" />}>Achievements</SectionHeader>
          <AchiveDetails />
        </Box>
        <Divider />
        <Box>
          <SectionHeader icon={<FaTools color="#7c8fd1" />}>Other Details</SectionHeader>
          <OtherDetails />
        </Box>
      </VStack>
    </Box>
  );
};

export default Resume;
