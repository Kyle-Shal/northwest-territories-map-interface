import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import MapLayers from "./components/Map";
// import RasterLayer from './components/RasterLayer';

import "./App.css";
import DatePicker from "./components/DatePicker";

function App() {
  const [value, setValue] = useState("sentinel-1");
  const [date, setDate] = useState("2022-07-01");

  function handleLayerChange(event) {
    setValue(event.target.value);
  }

  function handleDateChange(event) {
    console.log(event.target.value);
    setDate(event.target.value);
  }

  return (
    <Grid
      height="full"
      templateAreas={`"header"
                    "main"`}
      gridTemplateRows={"4rem 1fr"}
    >
      <GridItem area={"header"}>
        <Header value={value} onChange={handleLayerChange} />
      </GridItem>
      <GridItem area={"main"}>
        <Box
          position="absolute"
          right="0"
          zIndex={1}
          bg="white"
          borderRadius={4}
        >
          <DatePicker value={date} onChange={handleDateChange} />
        </Box>
        <MapLayers value={value} />
      </GridItem>
    </Grid>
  );
}

export default App;
