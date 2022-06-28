import { Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";
import Header from "./components/Header";
import MapLayers from "./components/Map";
// import RasterLayer from './components/RasterLayer';

import "./App.css";

function App() {
  return (
    <Grid
      height="full"
      templateAreas={`"header"
                    "main"`}
      gridTemplateRows={"4rem 1fr"}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"}>
        <MapLayers />
      </GridItem>
    </Grid>
  );
}

export default App;
