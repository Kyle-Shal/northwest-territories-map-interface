import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import MapLayers from "./components/Map";
// import RasterLayer from './components/RasterLayer';

import "./App.css";

function App() {
  const [value, setValue] = useState("sentinel-1");
  const [opacityValue, setOpacityVal] = useState(50);

  function handleLayerChange(event) {
    setValue(event.target.value);
  }

  function handleOpacityChange(value) {
    setOpacityVal(value);
  }

  return (
    <Grid
      height="full"
      templateAreas={`"header"
                    "main"`}
      gridTemplateRows={"4rem 1fr"}
    >
      <GridItem area={"header"}>
        <Header
          value={value}
          onChange={handleLayerChange}
          opacityValue={opacityValue}
          onOpacityChange={handleOpacityChange}
        />
      </GridItem>
      <GridItem area={"main"}>
        <MapLayers value={value} opacityValue={opacityValue} />
      </GridItem>
    </Grid>
  );
}

export default App;
