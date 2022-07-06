import React from "react";
import { Heading, Flex, Divider, Text, Stack } from "@chakra-ui/react";
import OpacitySlider from "./OpacitySlider";
import SatelliteLayerSelector from "./SatelliteLayerSelector";
import logo from "../logo.png";

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
        <Stack direction="row" h="60px" p={4}>
          <Heading as="h1" size="md">
            NORTHWEST TERRITORIES | {value.toUpperCase()}
          </Heading>{" "}
        </Stack>
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap={4}>
        {/*<OpacitySlider />*/}
        <SatelliteLayerSelector value={value} onChange={onChange} />
      </Flex>
    </Flex>
  );
}

export default Header;
