import React, { useContext, useEffect } from "react";
import Slider from '@mui/material/Slider';
import './sliderDetail.style.scss';

import modelsContext from '../Auth/models-context';

export const SliderDetail = (props) => {
  //console.log(props)
  const context = useContext(modelsContext)
  const {currentValues, currentModel} = context;
  const { unit, marks, defaultValue, min, max, idFieldset, step } = props;
  const [value, setValue] = React.useState(defaultValue);

  useEffect(() => {
 setValue(defaultValue)
  }, [currentModel]);
 


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
      valueLabelFormat={value => `${idFieldset === 3 ? "0," : ""}${value}${idFieldset === 3 ? "0" : ""} ${unit}`}
      step={step}
      min={min}
      max={max}
      marks={marks}
      value={value} 
      onChange={handleChange}
      valueLabelDisplay="on"
    />
  );
}