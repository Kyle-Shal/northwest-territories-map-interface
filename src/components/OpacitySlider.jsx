import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function OpacitySlider({ opacityValue, onOpacityChange }) {
  return (
    <Slider
      value={opacityValue}
      onChange={onOpacityChange}
      aria-label="slider-ex-1"
      minW="4rem"
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default OpacitySlider;
