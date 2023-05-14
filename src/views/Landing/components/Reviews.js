import { useState } from "react";

import { Box, Container, Fade, HStack, Heading, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";

function ReviewCard({ review }) {
  const { id, title, author, role, comment, rating } = review;
  return (
    <Box bg="white" borderRadius="3xl" p={8} width="400px" maxW="90%">
      <Box>
        <Heading fontSize="22px" lineHeight="40px" fontWeight="700">
          {title}{" "}
          <Text as="span" fontSize="16px" lineHeight="40px" fontWeight="400">
            - {author}, {role}
          </Text>
        </Heading>
      </Box>
      <Box mt={2}>
        <Text fontSize="md">{comment}</Text>
        <HStack spacing={1} mt={6} alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon fontSize="2xl" key={i} color={i < rating ? "yellow.300" : "gray.300"} />
            ))}
        </HStack>
      </Box>
    </Box>
  );
}

function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      title: "Game Changer",
      author: "Sarah",
      role: "fashion blogger",
      comment: "As a fashion blogger, I needed a chatbot that could understand my audience's queries and provide personalized responses. InquireBot was the perfect solution for me. I was able to train my bot to be niche-specific and provide accurate responses to my readers. Thanks to InquireBot, my engagement rates have skyrocketed",
      rating: 5,
    },
    {
      id: 2,
      title: "Writing Changer",
      author: "Bryan",
      role: "writer",
      comment: "As a fashion blogger, I needed a chatbot that could understand my audience's queries and provide personalized responses. InquireBot was the perfect solution for me. I was able to train my bot to be niche-specific and provide accurate responses to my readers. Thanks to InquireBot, my engagement rates have skyrocketed",
      rating: 4,
    },
    {
      id: 3,
      title: "Scenario Changer",
      author: "Oliver",
      role: "writer",
      comment: "As a fashion blogger, I needed a chatbot that could understand my audience's queries and provide personalized responses. InquireBot was the perfect solution for me. I was able to train my bot to be niche-specific and provide accurate responses to my readers. Thanks to InquireBot, my engagement rates have skyrocketed",
      rating: 5,
    },
  ];

  const handleNextClick = () => {
    setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1);
  };
  const handlePrevClick = () => {
    setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1);
  };

  return (
    <Box w="100%" py="100px">
      <Container maxW="container.lg">
        <SimpleGrid spacing={12} columns={2} alignItems="center">
          <Box>
            <Text fontWeight="700" fontSize="38px" lineHeight="40px">
              Don’t take our word for it, check out how our AI Chatbot helps users grow their business
            </Text>
            <HStack spacing={6} mt={8}>
              <IconButton size="lg" icon={<ArrowBackIcon fontSize="6xl" fontWeight="bold" />} variant="ghost" colorScheme="transparent" onClick={handlePrevClick} />
              <IconButton size="lg" icon={<ArrowForwardIcon fontSize="6xl" fontWeight="bold" />} variant="ghost" colorScheme="transparent" onClick={handleNextClick} />
            </HStack>
          </Box>

          <Fade key={reviews[currentReviewIndex].id} in={true} timingFunction="ease-out">
            <ReviewCard review={reviews[currentReviewIndex]} />
          </Fade>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Reviews;
