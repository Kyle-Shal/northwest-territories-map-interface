import React from 'react'
import MapGL from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'

import { mapboxAccessToken } from '../config'

function InteractiveMap ({
  accessToken = mapboxAccessToken,
  width = '100%',
  height = '100%',
  onClick,
  onMove = console.log,
  viewState = {},
  mapStyle = 'mapbox://styles/mapbox/light-v10',
  scale = true,
  reuseMaps = false,
  mapOptions = {
    hash: false
  },
  children
}) {
  return (
    <MapGL
      {...viewState}
      mapboxAccessToken={accessToken}
      style={{width, height}}
      onMove={onMove}
      mapStyle={mapStyle}
      reuseMaps={reuseMaps}
      mapOptions={mapOptions}
    >
      {children}
    </MapGL>
  )
}

export default InteractiveMap
