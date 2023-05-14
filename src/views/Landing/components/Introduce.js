import { Box, Container, Text, Image, Button } from "@chakra-ui/react";
import ChatBoard from "components/Chat/ChatBoard";

// Images
import InquireBotImage from "assets/img/landing/inquirebot-1.png";
import PlayButtonIcon from "assets/img/landing/play-button-icon.png";
import InquireBotAvatar from "assets/img/landing/inquirebot-2.png";
import ThomasAvatar from "assets/img/landing/thomas-1.png";

function Introduce() {
  return (
    <Box w="100%" bg="white" pt="80px" pb="80px">
      <Container maxW="container.lg" position="relative">
        <Box px={8}>
          <Text fontSize="60px" fontWeight={700} lineHeight="70px">
            <Text as="span" color="teal">
              Automate
            </Text>{" "}
            Your
            <Box as="br" />
            Customer Support
          </Text>
          <Text fontSize="30px" lineHeight="35px" mt={2}>
            The Revolutionary Chatbot with <Box as="br" />
            <Text as="span" fontWeight="700">
              Advanced OpenAI Technology
            </Text>
          </Text>
          <Box w="300px" mt={8}>
            <ChatBoard
              chats={[
                { side: "left", avatar: InquireBotAvatar, message: "Hi my name is Jack. Before we start, tell me your name." },
                { side: "right", avatar: ThomasAvatar, message: "Thomas" },
                { side: "left", avatar: InquireBotAvatar, message: "Nice to meet you Thomas! I am hear to answer all your dental related questions. How may I help you today?" },
                { side: "right", avatar: ThomasAvatar, message: "How can I book a cleaning?" },
              ]}
            />
          </Box>
          <Box position="absolute" top={0} right="20px">
            <Box position="relative" w="563px" h="715px">
              <Image src={InquireBotImage} />
              <Button variant="transparent-with-icon" position="absolute" left="30%" top="410px" transition="all .2s ease-in-out" _hover={{ transform: "translateY(-2px)" }}>
                <Image src={PlayButtonIcon} />
              </Button>
              <Button colorScheme="teal" h="70px" w="90%" textTransform="uppercase" position="absolute" fontSize="30px" left="50%" transform="translate(-50%, 0px)" bottom="15px">
                Get Started For Free
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Introduce;
