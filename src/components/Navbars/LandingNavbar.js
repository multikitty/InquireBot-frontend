// Chakra imports
import { Box, Button, Container, Flex, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { CreativeTimLogo, DocumentIcon, HomeIcon, PersonIcon, RocketIcon } from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

import { Link as ScrollLink } from "react-scroll";

// import { scrollTo } from "react-scroll";

export default function LandingNavbar(props) {
  const { logo, logoText, secondary, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  // Chakra color mode
  let navbarIcon = useColorModeValue("gray.700", "gray.200");
  let navbarBg = useColorModeValue("white", "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)");
  let navbarBorder = useColorModeValue("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)");
  let navbarShadow = useColorModeValue("0px 4px 4px rgba(0, 0, 0, 0.25)", "none");
  let navbarFilter = useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))");
  let navbarBackdrop = "blur(21px)";
  let navbarPosition = "fixed";
  if (props.secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    navbarPosition = "absolute";
  }
  var brand = <Link href={`${process.env.PUBLIC_URL}/#/`}>{logo}</Link>;
  var linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }}>
      <ScrollLink to="features" spy={true} smooth={true} duration={500}>
        <Button fontSize="md" color={navbarIcon} variant="transparent-with-icon">
          <Flex alignSelf="flex-end">
            <Text>Features</Text>
          </Flex>
        </Button>
      </ScrollLink>
      <ScrollLink to="pricing" spy={true} smooth={true} duration={500}>
        <Button fontSize="md" color={navbarIcon} variant="transparent-with-icon">
          <Flex alignSelf="flex-end">
            <Text>Pricing</Text>
          </Flex>
        </Button>
      </ScrollLink>
      <ScrollLink to="faq" spy={true} smooth={true} duration={500}>
        <Button fontSize="md" color={navbarIcon} variant="transparent-with-icon">
          <Flex alignSelf="flex-end">
            <Text>FAQ</Text>
          </Flex>
        </Button>
      </ScrollLink>
      <ScrollLink to="vision" spy={true} smooth={true} duration={500}>
        <Button fontSize="md" color={navbarIcon} variant="transparent-with-icon">
          <Flex alignSelf="flex-end">
            <Text>Vision</Text>
          </Flex>
        </Button>
      </ScrollLink>
    </HStack>
  );
  return (
    <Flex position={navbarPosition} background={navbarBg} border={navbarBorder} boxShadow={navbarShadow} filter={navbarFilter} backdropFilter={navbarBackdrop} mx="auto" width="100%" height="120px" top={0} alignItems="center" justifyContent="center" zIndex={1000}>
      <Container maxW="container.lg">
        <Flex justifyContent={{ sm: "start", lg: "space-between" }} alignItems="flex-end">
          {brand}
          <Box ms={{ base: "auto", lg: "0px" }} display={{ base: "flex", lg: "none" }}>
            <SidebarResponsive secondary={props.secondary} routes={routes} logo={logo} {...rest} />
          </Box>
          {linksAuth}
          <Link href="#/auth/signup">
            <Button
              colorScheme="teal"
              fontSize="md"
              size="lg"
              textTransform="uppercase"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
              display={{
                sm: "none",
                lg: "flex",
              }}
            >
              Get Started For Free
            </Button>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}

LandingNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
