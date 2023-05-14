import { Box, Button, Image, Tooltip } from "@chakra-ui/react";

function ChatbotButton(props) {
  const { image, label } = props;

  return (
    <Tooltip label={label} placement="top-start" hasArrow bg="white" color="black" p={2} borderRadius="2xl" boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)" mr={6} mb={3}>
      <Box as="button" boxShadow="0 4px 8px 0px rgba(0,0,0,0.2)" p={0} m={0} bgImage={image} bgSize="cover" bgPosition="center" w="80px" h="80px" borderRadius="50%" border="none" position="fixed" bottom={8} right={12} transition="all .3s ease-in-out" _hover={{ cursor: "pointer", boxShadow: "0 8px 12px 0px rgba(0,0,0,0.2)", transform: "translateY(-1px)" }} />
    </Tooltip>
  );
}

export default ChatbotButton;
