import { Flex, Container } from '@chakra-ui/react';
import Details from '../src/sections/details';
import Header from '../src/sections/header';
const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    
      <Header />
      <Details />
      
    
  </Container>
);

export default IndexPage;
