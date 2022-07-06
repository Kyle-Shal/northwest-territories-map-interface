import React, { useContext, useState } from 'react'
import { Source, Layer, _MapContext as MapContext } from 'react-map-gl'

import useSource from '../hooks/useSource'
import {
  defaultRasterUrl,
} from '../config'


function RasterLayer ({
  id = 'mosaic',
  rasterUrl = defaultRasterUrl,
  debug = false
}) {
  if (debug) {
    console.log({ id })
    console.log({ rasterUrl })
  }

  const { map } = useContext(MapContext)
  useSource({ map, url: rasterUrl, id })

  if (!headers['Authorization']) {
    return null
  }

  return (
    <Source id={id} type={type} tiles={[rasterUrl]}>
      <Layer id={id} type={type} />
    </Source>
  )
}

export default RasterLayer
