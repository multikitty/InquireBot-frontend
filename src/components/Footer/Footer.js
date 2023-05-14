/*eslint-disable*/
import React from "react";
import { Box, Container, HStack, IconButton, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import FacebookIcon from "assets/img/landing/facebook.png";
import InstagramIcon from "assets/img/landing/instagram.png";
import TwitterIcon from "assets/img/landing/twitter.png";
import LinkedinIcon from "assets/img/landing/linkedin.png";

export default function Footer() {
  return (
    <Box py={20} w="100%">
      <Container maxW="container.lg">
        <SimpleGrid columns={3}>
          <Box>
            <Text fontWeight="700">InquireBot</Text>
            <VStack mt={5} spacing={3} alignItems="flex-start">
              <Text>Privacy Policy</Text>
              <Text>Terms and Conditions</Text>
              <Text>Security Policy</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="700">Resources</Text>
            <VStack mt={5} spacing={3} alignItems="flex-start">
              <Text>Education Blogs</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="700">Contact</Text>
            <VStack mt={5} spacing={3} alignItems="flex-start">
              <Text>1-(530)325-0852</Text>
              <Text>info@inquirebot.ai</Text>
              <HStack spacing={0}>
                <IconButton icon={<Image src={FacebookIcon} />} variant="ghost" colorScheme="transparet" />
                <IconButton icon={<Image src={InstagramIcon} />} variant="ghost" colorScheme="transparet" />
                <IconButton icon={<Image src={TwitterIcon} />} variant="ghost" colorScheme="transparet" />
                <IconButton icon={<Image src={LinkedinIcon} />} variant="ghost" colorScheme="transparet" />
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
