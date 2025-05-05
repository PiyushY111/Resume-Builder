import { Stack, VStack, Image, Text, Box, Button, HStack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import hero from '../assts/hero.svg';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const HeroSection = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="100vh"
      pt="8vh"
      position="relative"
      overflow="hidden"
      bgGradient={colorMode === 'dark' 
        ? "linear(to-b, dark.900, dark.800)" 
        : "linear(to-b, brand.50, white)"
      }
    >
      {/* Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial(brand.200, transparent)"
        opacity={colorMode === 'dark' ? "0.1" : "0.5"}
        zIndex="0"
      />
      
      <Box
        position="absolute"
        top="20%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={colorMode === 'dark' ? "brand.800" : "brand.200"}
        filter="blur(100px)"
        opacity={colorMode === 'dark' ? "0.2" : "0.3"}
        zIndex="0"
      />
      
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={colorMode === 'dark' ? "accent.800" : "accent.200"}
        filter="blur(100px)"
        opacity={colorMode === 'dark' ? "0.2" : "0.3"}
        zIndex="0"
      />

      <Stack
        direction={['column', 'row']}
        maxW="1200px"
        minH={['100vh', '80vh']}
        margin="auto"
        alignItems="center"
        justifyContent="space-between"
        padding={['6', '10']}
        position="relative"
        zIndex="1"
        spacing={[8, 12]}
      >
        <VStack 
          w={['full', '50%']} 
          alignItems={['center', 'flex-start']} 
          spacing={8}
        >
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            fontSize={['4xl', '5xl', '6xl']}
            color={colorMode === 'dark' ? "brand.300" : "brand.700"}
            fontWeight="bold"
            fontFamily="heading"
            lineHeight="1.2"
            textAlign={['center', 'left']}
          >
            Create Your Professional Resume in Minutes
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            fontSize="xl"
            color={colorMode === 'dark' ? "gray.300" : "gray.600"}
            maxW="600px"
            textAlign={['center', 'left']}
          >
            Stand out from the crowd with our easy-to-use resume builder. 
            Create a professional resume that gets you noticed by employers.
          </MotionText>

          <HStack spacing={4} w={['full', 'auto']} justify={['center', 'flex-start']}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                bg="brand.500"
                color="white"
                _hover={{
                  bg: 'brand.600',
                  transform: 'translateY(-2px)',
                }}
                rightIcon={<BsArrowRight />}
              >
                Get Started
              </Button>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="outline"
                _hover={{
                  bg: colorMode === 'dark' ? 'dark.700' : 'brand.50',
                  transform: 'translateY(-2px)',
                }}
              >
                Learn More
              </Button>
            </MotionBox>
          </HStack>
        </VStack>

        <MotionBox
          w={['full', '50%']}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MotionImage 
            src={hero} 
            w="100%"
            maxW="600px"
            mx="auto"
            filter={colorMode === 'dark' 
              ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) invert(0.9)" 
              : "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
            }
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default HeroSection;
