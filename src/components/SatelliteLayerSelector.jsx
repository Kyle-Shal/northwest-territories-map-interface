import { Select } from "@chakra-ui/react";

function SatelliteLayerSelector({ value, onChange }) {
  return (
    <Select
      value={value}
      onChange={onChange}
      bg="white"
      color="black"
      variant="filled"
      minW="8rem"
    >
      <option value="basemap">Basemap</option>
      <option value="sentinel-1">Sentinel-1</option>
      <option value="sentinel-2">Sentinel-2</option>
    </Select>
  );
}

export default SatelliteLayerSelector;
