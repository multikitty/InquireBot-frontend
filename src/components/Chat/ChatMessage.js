import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

function ChatMessage(props) {
  const { avatar, message, side } = props;
  return side === "left" ? (
    <Flex alignItems="center" justifyContent="flex-start" position="relative" pt={8} pl={2} pb={2}>
      <Box maxW="100%">
        <Avatar src={avatar} bg="teal" position="absolute" top={2} left={0} />
        <Box borderRadius="xl" bg="white" boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.2)" pl={12} pr={8} py={3}>
          <Text fontSize="sm">{message}</Text>
        </Box>
      </Box>
    </Flex>
  ) : (
    <Flex alignItems="center" justifyContent="flex-end" position="relative" pt={8} pr={2} pb={2}>
      <Box maxW="80%">
        <Avatar src={avatar} bg="teal" position="absolute" top={2} right={0} />
        <Box borderRadius="xl" bg="teal.100" boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.2)" pl={8} pr={12} py={3}>
          <Text fontSize="sm">{message}</Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ChatMessage;
