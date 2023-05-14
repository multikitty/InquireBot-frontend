// Chakra imports
import { Box, Button, Flex, HStack, VStack, Icon, Image, useColorModeValue, Container, Text, Show, Center, Heading, StackDivider } from "@chakra-ui/react";
// Assets
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import { useAuth } from "../../auth-context/auth.context";
import { useHistory } from "react-router-dom";

import Introduce from "./components/Introduce";
import Welcome from "./components/Welcome";
import VsChatbot from "./components/VsChatbot";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Vision from "./components/Vision";
import CTA from "./components/CTA";

function LandingPage() {
  return (
    <VStack spacing={0} justifyContent="center" w="100%" pt={120} position="relative">
      <Show breakpoint="(min-width: 1024px)">
        <Box bg="#344966" position="absolute" top="-270px" left="-350px" borderRadius="50%" width="600px" height="600px" zIndex={10}></Box>
      </Show>
      <Introduce />
      <Welcome />
      <VsChatbot />
      <Benefits />
      <Reviews />
      <Pricing />
      <FAQ />
      <Vision />
      <CTA />
    </VStack>
  );
}

export default LandingPage;
