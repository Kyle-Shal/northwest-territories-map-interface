import * as React from 'react';
import Map, {Source, Layer} from 'react-map-gl';

// import RasterLayer from './components/RasterLayer';


const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
  ]
};

const layerStyle = {
  id: 'point',
  type: 'fill',
  paint: {
    'fill-color': '#007cbf'
  }
};

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken='pk.eyJ1Ijoia3lsZS1zaGFsIiwiYSI6ImNsNG9qOWdlODA0MGMzY25vNHZ6M3IyOWUifQ.A3wEO8a8heSNUkhDKOeHYA'
    >
    <Source id="my-data" type="geojson" data={"/public/northwest_territories_data.geojson"}>
        <Layer {...layerStyle} />
      </Source>
  </Map>
  );
}
export default App
