import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import OpacitySlider from "./OpacitySlider";
import SatelliteLayerSelector from "./SatelliteLayerSelector";

function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={5}
      bg="#005DA6"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Northwest Territories
        </Heading>
      </Flex>

      <Box width="100px">
        <OpacitySlider />
      </Box>
      <Box width="100px">
        <SatelliteLayerSelector />
      </Box>
    </Flex>
  );
}

export default Header;
