import { Box, Container, Heading, Text } from "@chakra-ui/react";

function Welcome() {
  return (
    <Box w="100%" bg="#344966">
      <Box bg="white">
        <Box bg="#344966" w="100%" h="100px" clipPath="ellipse(60% 100% at 50% 120%)"></Box>
      </Box>
      <Container bg="#344966" maxW="container.lg" py="20px">
        <Heading color="#FFF275" fontSize="60px" lineHeight="70px" textAlign="center">
          Welcome to InquireBot!
        </Heading>
        <Heading as="h3" textAlign="center" color="white" fontSize="28px" lineHeight="35px" mt={2}>
          The AI-Powered Chatbot designed to
          <Box as="br" />
          take your business to the next level!
        </Heading>
        <Box mt="56px" color="white">
          <Text>
            <Text as="span" fontWeight="bold">
              Are you tired of the same old chatbots?
            </Text>{" "}
            - that fail to understand your customers' queries? Or maybe you're looking for a way to provide personalized and accurate responses to your customers, without having to manually monitor your website 24/7?{" "}
          </Text>
          <Text mt="42px">
            <Text as="span" fontWeight="bold">
              Look no further!
            </Text>{" "}
            - InquireBot is here to revolutionize the way you engage with your customers. With InquireBot, you can create a chatbot that is trained to be niche-specific, giving you the power to customize responses for your customers in any industry, from fashion to healthcare to dental care.{" "}
          </Text>
          <Text mt="42px">
            <Text as="span" fontWeight="bold">
              But that's not all
            </Text>{" "}
            – with InquireBot's advanced OpenAI technology, you can easily fine-tune your bot's accuracy with further training. Plus, with thousands of people using the bot, InquireBot is constantly refining its answers across all niches.
          </Text>
        </Box>
      </Container>
      <Box bg="gray.50">
        <Box bg="#344966" w="100%" h="100px" clipPath="ellipse(60% 100% at 50% 0%)"></Box>
      </Box>
    </Box>
  );
}

export default Welcome;
