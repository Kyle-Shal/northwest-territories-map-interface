import { useEffect } from 'react'

function useSource ({
  mapContext,
  url,
  id
}) {
  // Not sure why, but need to getSource from mapContext
  // and set _sourceCaches from map.
  const map = mapContext.getMap()
  
  useEffect(() => {
    const source = mapContext.getSource(id)

    if (source) {
      // Update source url and repaint
      // https://github.com/mapbox/mapbox-gl-js/issues/2941#issuecomment-518631078
      source.tiles = [url]
      // sourceCaches moved in recent mapbox-gl version:
      // https://github.com/urbica/react-map-gl/issues/343
      // Also, `other:` prepended to sourceCache id
      map.style._sourceCaches[`other:${id}`].clearTiles()
      map.style._sourceCaches[`other:${id}`].update(map.transform)

      // Not sure if this is needed
      mapContext.triggerRepaint()
      
      // Save source to window for dev convenience
      window.mapContext = mapContext
      window.map = map
      window.source = source
    }
  }, [url, mapContext, map, id])
}

export default useSource
