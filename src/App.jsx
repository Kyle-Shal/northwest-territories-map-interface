import * as React from "react";
import MapLayers from "./components/Map";
import OpacitySlider from "./components/OpacitySlider";
// import RasterLayer from './components/RasterLayer';

function App() {
  return (
    <>
      <OpacitySlider />
      <MapLayers />
    </>
  );
}

export default App;
