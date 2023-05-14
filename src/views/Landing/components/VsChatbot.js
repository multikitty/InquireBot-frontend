import { Box, Flex, HStack, VStack, StackDivider, Heading, Image, Text } from "@chakra-ui/react";

// Images
import CheckMark from "assets/img/landing/check-mark.png";
import CrossMark from "assets/img/landing/cross-mark.png";

function HeaderItem(props) {
  const { text } = props;
  return (
    <Flex flex={1} flexBasis={0} justifyContent="center" py={9}>
      <Heading fontSize="38px" lineHeight="40px" fontWeight="700">
        {text}
      </Heading>
    </Flex>
  );
}
function BodyItem(props) {
  const { image, text } = props;
  return (
    <HStack w="100%" px={6} py={5} spacing={4} alignItems="flex-start">
      <Image src={image} />
      <Text fontSize="sm" lineHeight="lg">
        {text}
      </Text>
    </HStack>
  );
}

function VsChatbot() {
  return (
    <Flex id="features" justifyContent="center" w="100%" bg="linear-gradient(180deg, gray.50, rgba(239, 241, 243, 0) 100%)" pt="150px" pb="60px">
      <Box w="800px" bg="white" boxShadow="-8px 8px 10px rgba(0, 0, 0, 0.4), 0px 0px 30px #51ECE9, -8px 3.20036px 30px #000000, inset 0px 0px 48.0054px rgba(56, 211, 209, 0.3), inset 0px 0px 32.0036px rgba(56, 211, 209, 0.3), inset 0px 0px 20.0023px rgba(56, 211, 209, 0.4)" borderRadius="2xl">
        <HStack divider={<StackDivider borderWidth="2px" borderColor="black" />} spacing={0} borderBottom="3px solid black">
          <HeaderItem text="Old Chatbot" />
          <HeaderItem text="New Chatbot" />
        </HStack>
        <VStack divider={<StackDivider borderColor="black" />} spacing={0}>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="Powered by Keywords" />
            <BodyItem image={CheckMark} text="Powered by Deep Learning where the AI receives data and interprets the user’s desire" />
          </HStack>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="Navigation-focused and incapable of learning from interactions" />
            <BodyItem image={CheckMark} text="The Natural Language Processing(NLP) engine learns from every interactions to become increasingly successful" />
          </HStack>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="Highly predictable and rules-based" />
            <BodyItem image={CheckMark} text="Engage naturally in human-like personalized conversations" />
          </HStack>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="No semantics" />
            <BodyItem image={CheckMark} text="The NLP is able to understand the true meaning of the user’s request via semantic analysis of the phrase" />
          </HStack>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="Difficult to scale but works well if your have every small scope" />
            <BodyItem image={CheckMark} text="Easily able to scale and learn from the interaction but needs greater effort to set up" />
          </HStack>
          <HStack w="100%" divider={<StackDivider borderColor="black" />} spacing={0} flex={1} flexBasis={0} alignItems="flex-start">
            <BodyItem image={CrossMark} text="Performance optimization is difficult" />
            <BodyItem image={CheckMark} text="Performance is optimized through either reinforcement learning or via a simple training page that allows the bot to learn and optimize its behavior" />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default VsChatbot;
