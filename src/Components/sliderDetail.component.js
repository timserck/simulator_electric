import * as React from 'react';
import Slider from '@mui/material/Slider';
import './sliderDetail.style.scss';




export const SliderDetail = (props) => {
  //console.log(props)

  const { unit, marks, defaultValue, step } = props;

  return (
    <Slider
      classes={{
        "root": "slider",
        "track": "slider-track",
        "thumb": "slider-thumb",
        "rail": "slider-rail",
        "valueLabel": "slider-valueLabel",
        "markLabel": "slider-markLabel",
      }}
      aria-label="Always visible"
      defaultValue={defaultValue}
      valueLabelFormat={value => `${value} ${unit}`}
      step={step}
      marks={marks}
      valueLabelDisplay="on"
    />
  );
}