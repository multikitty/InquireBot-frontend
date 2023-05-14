import { CheckIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, HStack, Heading, Icon, List, ListIcon, ListItem, Portal, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
// import CheckIcon from "assets/img/landing/check.png";

function PricingCard({ name, price, content, color, isRecommended }) {
  return (
    <Box w="300px" maxW="100%" boxShadow="-4px 4px 20px rgba(0, 0, 0, 0.3)" borderWidth="3px" borderColor={color} borderRadius="2xl" px={8} py={12} pb={8} position="relative">
      {isRecommended && (
        <HStack position="absolute" top="0" left="0" transform="rotate(-16deg) translate(-50px, -50px);" bg="white" w="300px" spacing={3} py={2} justifyContent="center" alignItems="center" boxShadow="0px 0px 10px #51ECE9, 0px 4px 10px #51ECE9, 0px 4px 4px rgba(0, 0, 0, 0.25)" borderWidth="3px" borderColor="teal" borderRadius="2xl">
          <StarIcon color="teal" fontSize="28px" />
          <Text fontSize="28px" fontWeight="700">
            BEST VALUE
          </Text>
        </HStack>
      )}
      <Flex direction="column" justifyContent="space-between" h="100%">
        <Box>
          <Box textAlign="center">
            <Heading fontSize="36px" lineHeight="54px" fontWeight="bold">
              {name}
            </Heading>
            <Heading fontSize="40px" lineHeight="60px" fontWeight="bold">
              ${price}
              <Text as="span" fontSize="20px" lineHeight="30px" fontWeight="normal">
                /mo
              </Text>
            </Heading>
          </Box>
          <Box mt={5} pb="60px">
            <Text fontSize="sm" mb={4}>
              {content.comment}
            </Text>
            <VStack spacing={4} alignItems="flex-start">
              {content.features.map((feature, index) => (
                <HStack spacing={6} alignItems="flex-start" key={index}>
                  <CheckIcon fontSize="lg" bg="blue.800" color="white" p={0.5} borderRadius="3px" />
                  <Text fontSize="sm">{feature}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>
        <Button colorScheme="teal" size="lg" isFullWidth>
          TRY IT FREE!
        </Button>
      </Flex>
    </Box>
  );
}

function Pricing() {
  const subscriptions = [
    {
      name: "FREE",
      price: 0,
      content: {
        comment: "Includes access to our chatbot:",
        features: ["Up to 50 monthly chats", "Basic chatbot functionalities", "Personalized responses", "Simple customization", "Pre-built templates", "Email support"],
      },
      color: "yellow.200",
    },
    {
      name: "PRO",
      price: 199,
      content: {
        comment: "All the features of the free plan, plus:",
        features: ["Up to 1,000 monthly chats", "Advanced chatbot customization", "Advanced analytics", "Niche-specific training", "Personalized onboarding", "Custom branding", "Integration with multiple websites", "24/7 live chat support"],
      },
      color: "teal",
      isRecommended: true,
    },
    {
      name: "PREMIUM",
      price: 499,
      content: {
        comment: "All the features of the Pro plan, plus:",
        features: ["Unlimited monthly chats", "Enterprise-level chatbot customization", "Priority support from a dedicated account manager", "Advanced reporting and analytics", "Advanced AI training", "Unlimited integrations", "Integration with multiple platforms and APIs", "Custom training and development"],
      },
      color: "blue.800",
    },
  ];

  return (
    <Box id="pricing" w="100%" bg="white" py="100px">
      <Container maxW="container.lg">
        <Box textAlign="center">
          <Heading fontSize="60px" fontWeight="700" lineHeight="70px">
            Try InquireBot for FREE!
          </Heading>
          <Text fontSize="28px" lineHeight="35px" mt={8}>
            Test all our features with a free 7-day trial 🤖 Then continue with our free-forever plan and upgrade whenever you like.
          </Text>
        </Box>
        <SimpleGrid w="100%" justifyContent="center" columns={[1, 1, 1, 3, 3, 3]} spacing={10} mt="120px">
          {subscriptions.map((subscription, index) => (
            <PricingCard {...subscription} key={index} />
          ))}
        </SimpleGrid>
        <Box mt={12} px={20}>
          <Text>No matter which tier you choose, you can trust that InquireBot will provide accurate and personalized responses to your customers, leading to increased engagement and customer satisfaction. Choose the tier that's right for you and start engaging with your customers like never before.</Text>
          <Text mt={6}>
            <Text as="span" fontWeight="bold">
              So why wait?
            </Text>{" "}
            Try the smartest AI chatbot in the world today and see the difference for yourself!
          </Text>
          <Box mt={12} w="100%" textAlign="center">
            <Button colorScheme="teal" h="70px" fontSize="20px" px={8}>
              CONTACT US FOR PERSONALIZED SUPPORT!
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
