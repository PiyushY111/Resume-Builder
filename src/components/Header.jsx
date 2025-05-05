import React from 'react';
import './Header.css';
import { BsGear } from 'react-icons/bs';
import { Box, Heading, HStack, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg="rgba(255,255,255,0.7)"
      boxShadow="0 4px 24px 0 rgba(124,143,209,0.08)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="brand.100"
    >
      <Box
        maxW="1200px"
        mx="auto"
        py={3}
        px={[4, 8]}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack spacing={3}>
          <Heading
            as="h1"
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            fontSize={["2xl", "3xl"]}
            color="brand.600"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <span>Resume Builder</span>
            <Box as="span" className="gear-container">
              <BsGear className="gear" />
            </Box>
          </Heading>
        </HStack>
        <Button
          variant="solid"
          size="md"
          colorScheme="brand"
          fontWeight="semibold"
          borderRadius="lg"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Header;