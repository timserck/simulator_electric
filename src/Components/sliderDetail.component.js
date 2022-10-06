import React, { useContext } from "react";
import Slider from '@mui/material/Slider';
import './sliderDetail.style.scss';

import modelsContext from '../Auth/models-context';

export const SliderDetail = (props) => {
  //console.log(props)
  const context = useContext(modelsContext)
  const {currentValues} = context;
  const { unit, marks, defaultValue, step, min, max, idFieldset } = props;
  const [value, setValue] = React.useState(defaultValue);
 


  const handleChange = (event, newValue) => {
    setValue(newValue);
    let newValues = currentValues
    // console.log(values, "values")
    newValues[idFieldset] = newValue
    context.onChangeSlider(newValues)
  };

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
      // step={step}
      min={min}
      max={max}
      marks={marks}
      value={value} 
      onChange={handleChange}
      valueLabelDisplay="on"
    />
  );
}