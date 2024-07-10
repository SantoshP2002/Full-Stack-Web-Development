import { useState } from "react";
import "./App.css";
import "./App.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { px } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box bg="green" w="100%" p={4} color="white">
        This is the Box
        {/* <HStack spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</HStack> */}
        {/* <VStack spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</VStack> */}
        {/* <Flex flexDir="column" gap={"10px"} spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</Flex> */}
        {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid> */}
        {/* <Stack spacing={5} direction='row'>
  <Checkbox isDisabled>Checkbox</Checkbox>
  <Checkbox isDisabled defaultChecked>
    Checkbox
  </Checkbox>
</Stack> */}
        {/* <Input placeholder='Basic usage' /> */}
        {/* <Stack spacing={3}>
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
</Stack> */}
        {/* <Stack spacing={3}>
<InputGroup>
    <InputLeftAddon bg={"blue"}>+91</InputLeftAddon>
    <Input type='tel' placeholder='phone number' />
  </InputGroup>
</Stack> */}
      </Box>
    </>
  );
}

export default App;
