import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import Map, { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";
import nwtData from "../northwest_territories_data.json";
// import diffData from "../difference.json";

// import RasterLayer from './components/RasterLayer';

const maskLayer = {
  id: "zmask",
  source: "mask",
  type: "fill",
  paint: {
    "fill-color": "white",
    "fill-opacity": 0.3,
  },
};

const layerStyle = {
  id: "point",
  type: "fill",
  paint: {
    "fill-color": "transparent",
    "fill-opacity": 1.0,
    "fill-outline-color": "#fff",
  },
};

const sensor = {
  id: "sentinel-2",
  label: "Sentinel 2",
  type: "wmts",
  url: `https://services.sentinel-hub.com/ogc/wms/318be53b-974b-4918-8f5f-53ba0a37079c?showLogo=false&service=WMTS&request=GetMap&layers=TRUE_COLOR&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-2&maxcc=60&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=$2019-09-01/$2019-09-01`,
};

const defaultUrl = () => "";
const url = sensor.url ? sensor.url : defaultUrl;
const mapboxUrl = url;
const sourceId = "satellite";
const layerId = `${sourceId}-layer`;
const layer = {
  type: "raster",
  "source-layer": sourceId,
  // 'minzoom': 5
};
const nwtBbox = turf.bbox(nwtData);
const nwtBboxPolygon = turf.bboxPolygon(nwtBbox);
const bufferedNwtBboxPolygon = turf.buffer(nwtBboxPolygon, 20);
const buffedNwtBbox = turf.bbox(bufferedNwtBboxPolygon);
const bbox = buffedNwtBbox;

function MapLayers() {
  return (
    <Map
      initialViewState={{
        width: "100%",
        height: "100%",
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      maxBounds={bbox}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken="pk.eyJ1Ijoia3lsZS1zaGFsIiwiYSI6ImNsNG9qOWdlODA0MGMzY25vNHZ6M3IyOWUifQ.A3wEO8a8heSNUkhDKOeHYA"
    >
      <Source id="my-data" type="geojson" data={nwtData}>
        <Layer {...layerStyle} />
      </Source>
      <Source key={sourceId} id={sourceId} type="raster" tiles={[mapboxUrl]}>
        <Layer
          key={layerId}
          id={layerId}
          beforeId={"building-outline"}
          {...layer}
        />
      </Source>
    </Map>
  );
}

export default MapLayers;
