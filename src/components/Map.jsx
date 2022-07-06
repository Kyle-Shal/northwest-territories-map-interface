import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl";
import * as turf from "@turf/turf";
import nwtData from "../northwest_territories_rivers.json";
// import diffData from "../difference.json";

const layerStyle = {
  id: "nwt-data-layer",
  type: "fill",
  paint: {
    "fill-color": "transparent",
    "fill-opacity": 1.0,
    "fill-outline-color": "#fff",
  },
};

const nwtBbox = turf.bbox(nwtData);
const nwtBboxPolygon = turf.bboxPolygon(nwtBbox);
const bufferedNwtBboxPolygon = turf.buffer(nwtBboxPolygon, 20);
const buffedNwtBbox = turf.bbox(bufferedNwtBboxPolygon);
const bbox = buffedNwtBbox;

function SentinelSource({ sourceId: inputSourceId, url, date }) {
  const sourceId = `${inputSourceId}-${date}`;

  const layerId = `${sourceId}-layer`;
  console.log(date);

  /*

  useEffect(() => {
    console.log("date has changed");
    if (map.getSource(sourceId)) {
      // Set the tile url to a cache-busting url (to circumvent browser caching behaviour):
      map.getSource(sourceId).tiles = [
        `http://some.url/{z}/{x}/{y}.pbf?dt=${Date.now()}`,
      ];
      // Remove the tiles for a particular source
      map.style._sourceCaches[sourceId].clearTiles();
      // Load the new tiles for the current viewport (map.transform -> viewport)
      map.style.sourceCaches[sourceId].update(map.transform);
      map.getStyle()._sourceCaches

      // Force a repaint, so that the map will be repainted without you having to touch the map
      map.triggerRepaint();
    }
  }, [date]);

  */

  const layer = {
    type: "raster",
    "source-layer": sourceId,
  };

  return (
    <Source key={sourceId} id={sourceId} type="raster" tiles={[url]}>
      <Layer beforeId="nwt-data-layer" key={layerId} id={layerId} {...layer} />
    </Source>
  );
}

function MapLayers({ value, date }) {
  const sensors = {
    "sentinel-1": {
      id: "sentinel-1",
      label: "Sentinel 1",
      type: "wmts",
      url: `https://services.sentinel-hub.com/ogc/wms/6179cd9a-6ff5-43a5-8f01-8aef07e9f211?showLogo=false&service=WMTS&request=GetMap&layers=S1-DB-HH3&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-1&maxcc=100&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=${date}/${date}`,
    },
    "sentinel-2": {
      id: "sentinel-2",
      label: "Sentinel 2",
      type: "wmts",
      url: `https://services.sentinel-hub.com/ogc/wms/318be53b-974b-4918-8f5f-53ba0a37079c?showLogo=false&service=WMTS&request=GetMap&layers=TRUE_COLOR&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-2&maxcc=60&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=${date}/${date}`,
    },
  };
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
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      mapboxAccessToken="pk.eyJ1Ijoia3lsZS1zaGFsIiwiYSI6ImNsNG9qOWdlODA0MGMzY25vNHZ6M3IyOWUifQ.A3wEO8a8heSNUkhDKOeHYA"
    >
      <Source id="nwt-data" type="geojson" data={nwtData}>
        <Layer {...layerStyle} />
      </Source>
      {value === "sentinel-1" && (
        <SentinelSource
          sourceId={sensors["sentinel-1"].id}
          url={sensors["sentinel-1"].url}
          date={date}
        />
      )}
      {value === "sentinel-2" && (
        <SentinelSource
          sourceId={sensors["sentinel-2"].id}
          url={sensors["sentinel-2"].url}
          date={date}
        />
      )}
      <NavigationControl position="top-left" />
    </Map>
  );
}

export default MapLayers;
