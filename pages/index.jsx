import { ChakraProvider, Text, Box, Input, Flex, VStack, HStack, Image, SkeletonCircle, Spinner } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { useState } from 'react';
export default function Home() {

  
  const [username, setUsername] = useState('');
  const onChange = (event) => {
    setUsername(event.target.value);
  };

  
  const [data, setData] = useState();
  const search = async () => {
    const resp = await fetch("https://api.github.com/users/" + username);
    const respData = await resp.json();
    setData(respData);
  }

  /* 
    mlo7a9i9 conan, ya3malo jahidan, la yakhcha l mihan, almo7a9i9 conan, ohoooo ho conan TNNN conan TNNN, yaaskhqw almo7a9i9 conan TNNNN conan TNNN
    ya3malo jahidaaaaaaaan, lalalalala lala, lalala, la laaaaaaaaaaaaaaaa, lalala lala, lalala la laaaaaaaaaaaaaa
  */
  return (

 
    <ChakraProvider>
      <Flex bgColor="#b3cdd1" justifyContent="center" alignItems="center" backgroundImage="linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)" w="100%" h="100vh">
        <Box bgColor="white" padding="100px" borderWidth="1px" borderRadius="lg" w="1200px" boxShadow=" 0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)">
          <VStack spacing="25px">
            {
              data ? 
              (<> 
              <HStack spacing="25px">
                <Image src={data && data.avatar_url} fallback={<SkeletonCircle boxSize="140px" />} alt="avatar" borderRadius="full" boxSize="140px" border="5px solid black"/>
                <Box fontSize="50px" fontWeight="500">{data && data.name}</Box>
              </HStack>
                <HStack spacing="85px" fontSize="20px" fontWeight="400">
                  <Flex alignItems="center">
                    <Text fontWeight="500" fontSize="28px" mr={2}>{data && data.followers}</Text>
                    Followers
                  </Flex>
                  <Flex alignItems="center">
                    <Text fontWeight="500" fontSize="28px" mr={2}>{data && data.following}</Text>
                    Following
                  </Flex>
                  <Flex alignItems="center">
                    <Text fontWeight="500" fontSize="28px" mr={2}>{data && data.public_repos}</Text>
                    Repositories
                  </Flex>
                </HStack>
              <Box>{data && data.bio}</Box>
              </>) 
              : <Image src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" boxSize="200px" />
            }
            <HStack spacing="10px">
              <Input variant="outline" placeholder="Search a Github user" value={username} onChange={onChange} _focus={{ borderColor: "black" }} />
              <Button variant="outline" color="#A0AEC0" fontWeight="normal" id="search" _focus={{ borderColor: "black" }} onClick={search}>Search</Button>
            </HStack>
          </VStack>
        </Box> 
      </Flex>
    </ChakraProvider>
  )
}


