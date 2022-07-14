import React, { useState } from 'react';
import * as turf from "@turf/turf";

import { Button } from './Button';
import InteractiveMap from '../components/InteractiveMap'
import RasterLayer from '../components/RasterLayer'
import fitBounds from '../utils/fitBounds'
import nwtData from '../northwest_territories_rivers.json'

const nwtBbox = turf.bbox(nwtData);
const nwtBboxPolygon = turf.bboxPolygon(nwtBbox);
const bufferedNwtBboxPolygon = turf.buffer(nwtBboxPolygon, 20);
const buffedNwtBbox = turf.bbox(bufferedNwtBboxPolygon);
const bbox = buffedNwtBbox

const defaultViewState = fitBounds({ bounds: bbox })

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/RasterLayer',
  component: RasterLayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    rasterUrl: {
      options: [
	'https://services.sentinel-hub.com/ogc/wms/6179cd9a-6ff5-43a5-8f01-8aef07e9f211?showLogo=false&service=WMTS&request=GetMap&layers=S1-DB-HH3&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-1&maxcc=100&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=2020-12-01/2020-12-01',
	'https://services.sentinel-hub.com/ogc/wms/318be53b-974b-4918-8f5f-53ba0a37079c?showLogo=false&service=WMTS&request=GetMap&layers=TRUE_COLOR&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-2&maxcc=60&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=2019-09-01/2019-09-01',
      ],
      control: {
	type: 'select',
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [viewState, setViewState] = useState(defaultViewState)

  return (
    <InteractiveMap
      viewState={viewState}
      width={'95vw'}
      height={'90vh'}
    >
      <RasterLayer
	{...args}
      />
    </InteractiveMap>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rasterUrl: 'https://services.sentinel-hub.com/ogc/wms/6179cd9a-6ff5-43a5-8f01-8aef07e9f211?showLogo=false&service=WMTS&request=GetMap&layers=S1-DB-HH3&styles=&format=image%2Fpng&transparent=true&version=1.1.1&name=Sentinel-1&maxcc=100&height=512&width=512&srs=EPSG%3A3857&exceptions=BLANK&bbox={bbox-epsg-3857}&time=2020-12-01/2020-12-01',
  id: 'satellite',
  type: 'raster',
  debug: true,
};
