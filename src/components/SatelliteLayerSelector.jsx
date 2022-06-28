import { ChakraProvider, Select } from "@chakra-ui/react";

function SatelliteLayerSelector() {
  return (
    <Select bg="white" color="black" variant="filled" placeholder="Layer">
      <option value="option1">Sentinel-1</option>
      <option value="option2">Sentinel-2</option>
    </Select>
  );
}

export default SatelliteLayerSelector;
