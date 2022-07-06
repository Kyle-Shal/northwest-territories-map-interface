import { useEffect } from 'react'

function useSource ({
  mapContext,
  url,
  id
}) {
  // console.log(typeOf(map))
  // m.style._sourceCaches['other:mosaic']
  const map = mapContext.getMap()
  
  useEffect(() => {
    console.log({id})
    const source = mapContext.getSource(id)
    console.log({source})
    if (source) {
      // Update source url and repaint
      // https://github.com/mapbox/mapbox-gl-js/issues/2941#issuecomment-518631078
      source.tiles = [url]
      map.style._sourceCaches[`other:${id}`].clearTiles()
      map.style._sourceCaches[`other:${id}`].update(map.transform)
      // map.style.sourceCaches[id].clearTiles()
      // map.style.sourceCaches[id].update(map.transform)
      mapContext.triggerRepaint()
      // Save source to window for dev convenience
      window.source = source
      console.log(source.tiles)
    }
    // Save map to window for dev convenience
    window.map = map
  }, [url, mapContext, map, id])
}
// source = mapContext.getSource('mosaic')
// source.tiles = ['https://services.sentinel-hub.com/ogc/wms/318be53b-974b-4918-8f5f-53ba0a37079c?showLogo=false&service=WMTS&request=GetMap&layers=TRUE_COLOR&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-2&maxcc=60&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=2019-09-01/2019-09-01']
// map.style._sourceCaches['other:mosaic'].clearTiles()
// map.style._sourceCaches['other:mosaic'].update(map.transform)
export default useSource
