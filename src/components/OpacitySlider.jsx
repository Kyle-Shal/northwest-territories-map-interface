import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function OpacitySlider({ value, onChange }) {
  return (
    <Slider
      value={value}
      onChange={onChange}
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
