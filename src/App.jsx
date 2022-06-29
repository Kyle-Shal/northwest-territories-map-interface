import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import MapLayers from "./components/Map";
// import RasterLayer from './components/RasterLayer';

import "./App.css";

function App() {
  const [value, setValue] = useState("sentinel-1");

  function handleLayerChange(event) {
    setValue(event.target.value);
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
        <MapLayers value={value} />
      </GridItem>
    </Grid>
  );
}

export default App;
