import { ChakraProvider, Text, Box, Input, Flex, VStack, HStack, Image, } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
export default function Home() {
  return (
    <ChakraProvider>
      <Flex bgColor="#b3cdd1" justifyContent="center" alignItems="center" backgroundImage="linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)" w="100%" h="100vh">
        <Box bgColor="white" padding="100px" borderWidth="1px" borderRadius="lg" w="1200px" boxShadow=" 0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)">
          <VStack spacing="25px">
            <HStack spacing="25px">
              <Image src="https://avatars3.githubusercontent.com/u/2952507" alt="avatar" borderRadius="full" boxSize="100px"/>
              <Box fontSize="50px" fontWeight="500">Alaa Zorkane</Box>
            </HStack>
            <Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
              <HStack spacing="10px">
                <Input variant="outline" placeholder="Search a Github user" />
                <Button variant="outline" color="#A0AEC0" fontWeight="normal">Search</Button>
              </HStack>
          </VStack>
        </Box> 
      </Flex>
    </ChakraProvider>
  )
}


// <Text fontSize="15px" color="pink.700" fontWeight="bold">Github Profile</Text>
// <Input variant="outline" placeholder="Search a Github user" />
// <Button colorScheme="blue">Search</Button>