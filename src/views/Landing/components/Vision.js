import { Box, Container, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ChatbotImage from "assets/img/landing/inquirebot-3.png";
import QuoteBackground from "assets/img/landing/quote-bg.png";
import InquireBotAvatar from "assets/img/landing/inquirebot-2.png";
import ThomasAvatar from "assets/img/landing/thomas-1.png";
import ChatBoard from "components/Chat/ChatBoard";

function Vision() {
  return (
    <Box id="vision" w="100%" py="100px" bg="white">
      <Container maxW="container.lg">
        <Box textAlign="center">
          <Heading fontSize="60px" lineHeight="70px" fontWeight="700">
            Our Vision
          </Heading>
          <Text fontSize="28px" lineHeight="30px" mt={3}>
            A Future of Personalized Customer Engagement,
            <Box as="br" />
            using Advanced AI-Powered technology
          </Text>
        </Box>
        <Box position="relative" mt={16}>
          <Box px={3} w="60%">
            <Heading fontSize="38px" lineHeight="40px" fontWeight="700">
              Empowering Businesses with Personalized and Accurate Customer Engagement
            </Heading>
            <Text mt={5}>At InquireBot, we believe in a future where businesses can connect with their customers in a meaningful and personalized way. Our vision is to empower businesses with the latest artificial intelligence technology, allowing them to provide personalized and accurate responses to their customers, and ultimately, revolutionizing the way businesses engage with their audience.</Text>
          </Box>
          <Image src={ChatbotImage} position="absolute" top="0" right="0" transform="translate(100px, -125px)" />
        </Box>
        <Box mt={20}>
          <Heading>A World of Effortless Customer-Business Interaction</Heading>
          <Text mt={5} px={3}>
            We envision a world where customers can effortlessly interact with businesses, receiving customized responses that accurately address their queries and concerns. We believe that this level of engagement will lead to improved customer satisfaction, increased brand loyalty, and ultimately, higher revenue for businesses of all sizes.
          </Text>
        </Box>
      </Container>
      <Box backgroundImage={`url(${QuoteBackground})`} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" py={12} mt={20}>
        <Container maxW="container.lg">
          <Text px={3} w="60%" fontSize="30px" lineHeight="35px" color="white" fontWeight="light" fontStyle="italic">
            Unlock the power of AI and experience the limitless possibilities of our chatbot. From healthcare to finance, our AI is here to learn, adapt and provide personalized solutions for all your needs.
          </Text>
        </Container>
      </Box>
      <Box bg="white" py={12}>
        <Container maxW="container.lg">
          <HStack spacing={20}>
            <Box w="350px" mt={8}>
              <ChatBoard
                chats={[
                  { side: "right", avatar: ThomasAvatar, message: "Hi, I'm interested in purchasing one of your products. Can you help me find the right one for my needs?" },
                  { side: "left", avatar: InquireBotAvatar, message: "Of course! What type of product are you looking for?" },
                  { side: "right", avatar: ThomasAvatar, message: "I need a new laptop for work, but I'm not sure which one is best." },
                  { side: "left", avatar: InquireBotAvatar, message: "Great! We offer a variety of laptops that are designed for different needs. What type of work will you be using the laptop for?" },
                ]}
              />
            </Box>
            <Box flex="1">
              <Heading fontSize="38px" lineHeight="40px" fontWeight="700">
                Bringing Personalized Solutions to Businesses Across Industries
              </Heading>
              <Text mt={12} px={5}>
                Our goal at InquireBot is to make this vision a reality for businesses around the world. We're dedicated to creating a chatbot that can be trained to be niche-specific, providing personalized solutions for businesses in any industry. With InquireBot's advanced OpenAI technology, businesses can trust that their chatbot is providing the most accurate responses possible, leading to improved customer satisfaction and ultimately, more conversions.
              </Text>
            </Box>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default Vision;
