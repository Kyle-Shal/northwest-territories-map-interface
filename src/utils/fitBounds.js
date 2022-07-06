import geoViewport from '@mapbox/geo-viewport'

function fitBounds ({
  bounds,
  divisor = 3
}) {
  const width = window.innerWidth / divisor
  const height = window.innerHeight / divisor

  const {
    center: [longitude, latitude],
    zoom
  } = geoViewport.viewport(bounds, [width, height])

  return { longitude, latitude, zoom }
}

export default fitBounds
