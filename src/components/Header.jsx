import React from "react";
import { Heading, Flex, Divider, Text, Stack } from "@chakra-ui/react";
import OpacitySlider from "./OpacitySlider";
import SatelliteLayerSelector from "./SatelliteLayerSelector";
import logo from "../logo.png";

function Header({ value, onChange, opacityValue, onOpacityChange }) {
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
        {
          //<img src={logo} alt="logo" width={125}></img>
        }
        <Stack direction="row" h="50px" p={4}>
          <Heading as="h1" size="md">
            NORTHWEST TERRITORIES | {value.toUpperCase()}
          </Heading>{" "}
        </Stack>
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap={4}>
        <OpacitySlider value={opacityValue} onChange={onOpacityChange} />
        <SatelliteLayerSelector value={value} onChange={onChange} />
      </Flex>
    </Flex>
  );
}

export default Header;
