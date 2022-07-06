import React, { useState } from 'react';

import { Button } from './Button';
import InteractiveMap from '../components/InteractiveMap'
// import RasterLayer from '../components/RasterLayer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/InteractiveMap',
  component: InteractiveMap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

const defaultViewState = {
      longitude: -100,
      latitude: 40,
      zoom: 3.5
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [viewState, setViewState] = useState(defaultViewState)

  return (
    <InteractiveMap
      {...args}
      viewState={viewState}     
      // onMove={setViewState}
    />
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  width: '95vw',
  height: '90vh',
};
