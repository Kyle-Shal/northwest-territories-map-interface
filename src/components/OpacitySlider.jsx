import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  ChakraProvider,
} from "@chakra-ui/react";

function OpacitySlider() {
  return (
    <ChakraProvider>
      <Slider aria-label="slider-ex-1" defaultValue={30} minH="140px">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </ChakraProvider>
  );
}

export default OpacitySlider;
