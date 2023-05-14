import { Box } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";

function ChatBoard(props) {
  const { chats } = props;
  return <Box w="100%">{chats && chats.map((chat, index) => <ChatMessage key={index} side={chat.side} avatar={chat.avatar} message={chat.message} />)}</Box>;
}

export default ChatBoard;
