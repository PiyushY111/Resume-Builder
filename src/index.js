import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f6f7fb',
      100: '#e9eaf6',
      200: '#d3d6ee',
      300: '#b0b8e0',
      400: '#7c8fd1',
      500: '#5a6fc7',
      600: '#3d4fa6',
      700: '#2c397a',
      800: '#1c254d',
      900: '#10142a',
    },
    accent: {
      50: '#f3e8ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fc',
      400: '#a855f7',
      500: '#9333ea',
      600: '#7e22ce',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
        color: 'gray.800',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
          boxShadow: 'lg',
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: 'white',
          borderRadius: 'md',
          borderColor: 'gray.200',
          _placeholder: { color: 'gray.400' },
          _focus: {
            borderColor: 'brand.400',
            boxShadow: '0 0 0 1px #7c8fd1',
          },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          fontWeight: 'medium',
          borderRadius: 'md',
          _selected: {
            color: 'brand.600',
            bg: 'brand.100',
            boxShadow: 'md',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'xl',
          boxShadow: 'xl',
          bg: 'white',
          p: 6,
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: '2xl',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
     <ChakraProvider theme={theme}>
       <App />
     </ChakraProvider>
   </Provider>
);
