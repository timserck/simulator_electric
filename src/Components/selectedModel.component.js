

import { Typography } from '@mui/material';
import './selectedModel.style.scss';
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';

export const SelectedModel = () => {

  const context = useContext(modelsContext)
  const {currentModel, models} = context

  const getCurrentImg = (currentModel) => {
   return (models.filter(item => item.name === currentModel)[0].img).toString()
  }
  

  
  return (
    <section className='selected'>
        <img className='selected-img' src={getCurrentImg(currentModel)} alt="selected img" />



    
    <div className="selected-details">
    <Typography className="selected-name" variant='h2' component={"span"}>{currentModel}</Typography>
    <Typography className="selected-km" variant='h5' component={"span"}>&nbsp;– jusqu’à {currentModel === "e-208" ? "345km" : "400km"} d’autonomie sur cycle WLTP</Typography>
    </div>


  </section>
  );
}
