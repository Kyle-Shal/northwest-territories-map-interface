import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import MapLayers from "./components/Map";
// import RasterLayer from './components/RasterLayer';

import "./App.css";
import DatePicker from "./components/DatePicker";

function App() {
  const [value, setValue] = useState("sentinel-1");
  const [date, setDate] = useState("2020-10-18");

  const [yy, mm, dd] = date.split("-");
  var dateLong = new Date(yy, mm, dd);
  var day = dateLong.toDateString();

  function handleLayerChange(event) {
    setValue(event.target.value);
  }

  function handleDateChange(event) {
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
          top={75}
          right={25}
          zIndex={1}
          bg="white"
          borderRadius={4}
        >
          <DatePicker value={date} onChange={handleDateChange} />
        </Box>
        <Box position="absolute" top={150} right={25} zIndex={1} maxW={450}>
          <Text align="center" color="white" fontSize="4xl">
            {day}
          </Text>
        </Box>
        <MapLayers value={value} date={date} />
      </GridItem>
    </Grid>
  );
}

export default App;
