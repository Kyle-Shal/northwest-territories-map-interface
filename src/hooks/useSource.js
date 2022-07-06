import { useEffect } from 'react'

import type MapGL from 'react-map-gl'

function useSource ({
  map,
  url,
  id
}): void {
  // console.log(typeOf(map))
  useEffect(() => {
    const source = map.getSource(id)
    if (source) {
      // Update source url and repaint
      // https://github.com/mapbox/mapbox-gl-js/issues/2941#issuecomment-518631078
      source.tiles = [url]
      map.style.sourceCaches[id].clearTiles()
      map.style.sourceCaches[id].update(map.transform)
      map.triggerRepaint()
      // Save source to window for dev convenience
      window.source = source
    }
    // Save map to window for dev convenience
    window.map = map
  }, [url, map, id])
}

export default useSource
