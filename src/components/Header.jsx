import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import OpacitySlider from "./OpacitySlider";
import SatelliteLayerSelector from "./SatelliteLayerSelector";

function Header({ value, onChange }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="#005DA6"
      height="full"
      px={4}
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="md">
          Northwest Territories
        </Heading>
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap={4}>
        {/*<OpacitySlider />*/}
        <SatelliteLayerSelector value={value} onChange={onChange} />
      </Flex>
    </Flex>
  );
}

export default Header;
