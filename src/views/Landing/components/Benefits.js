import { Box, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import LightBulbImage from "assets/img/landing/light-bulb.png";

function Benefits() {
  return (
    <Box w="100%" py="120px" bg="white">
      <Container maxW="container.lg">
        <Heading fontSize="60px" lineHeight="70px" fontWeight="700" textAlign="center" px="100px">
          So why choose InquireBot over regular old chatbots?
        </Heading>
        <VStack spacing={9} fontSize="md" mt={12}>
          <Text>
            <Text as="span" fontWeight="600">
              The benefits are clear
            </Text>{" "}
            – InquireBot's AI chatbot is designed to provide personalized responses to your customers, leading to increased engagement, improved customer satisfaction, and ultimately, more conversions. Plus, with OpenAI's advanced technology, you can trust that your chatbot is providing the most accurate responses possible.{" "}
          </Text>
          <Text>
            <Text as="span" fontWeight="600">
              And the best part?
            </Text>{" "}
            Installing InquireBot takes less than 2 minutes. That's right – in just a few clicks, you can have your very own niche-specific chatbot up and running on your website.{" "}
          </Text>
          <Text>
            <Text as="span" fontWeight="600">
              So what are you waiting for?
            </Text>{" "}
            Sign up for InquireBot today and take the first step towards revolutionizing the way you engage with your customers!
          </Text>
        </VStack>
        <HStack spacing={12} mt="100px" px="120px">
          <Image src={LightBulbImage} />
          <VStack spacing={9} align="flex-start">
            <Heading fontSize="38px" lineHeight="40px">
              Personalized Responses
            </Heading>
            <Text fontSize="md">Our niche-specific chatbot allows you to customize responses for your customers in any industry, providing them with personalized solutions.</Text>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Benefits;
