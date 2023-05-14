import { Box, Button, Container, Heading, Image, Input, Text } from "@chakra-ui/react";
import InquireBotImage from "assets/img/landing/inquirebot-4.png";
import ThomasImage from "assets/img/landing/thomas-2.png";

function CTA() {
  return (
    <Box w="100%" pb="100px" bg="white">
      <Container maxW="container.sm">
        <Box textAlign="center">
          <Heading fontSize="38px" lineHeight="40px" fontWeight="700">
            Transforming the Way Businesses Connect with Their Customers
          </Heading>
          <Text mt={6}>At InquireBot, our vision is to empower businesses to engage with their customers in a way that's meaningful, personalized, and effortless. We believe that by providing businesses with the latest AI technology, we can create a world where customers and businesses can interact seamlessly, leading to a brighter future for everyone.</Text>
        </Box>
        <Box mt={12} textAlign="center" position="relative">
          <Input type="email" w="600px" maxW="80%" h="80px" placeholder="Email..." boxShadow="inset 0px 2px 12px rgba(0, 0, 0, 0.5)" _focus={{ bg: "white", boxShadow: "inset 0px 2px 12px rgba(0, 0, 0, 0.5)" }} borderRadius="xl" fontSize="24px" px={8} />
          <Button colorScheme="teal" h="70px" fontSize="20px" px={20} my={10}>
            SIGN UP FOR FREE TODAY!
          </Button>
          <Image src={InquireBotImage} position="absolute" top="0" left="0" transform="translate(-350px, -80px)" />
          <Image src={ThomasImage} position="absolute" top="0" right="0" transform="translate(350px, -150px)" />
        </Box>
      </Container>
    </Box>
  );
}

export default CTA;
