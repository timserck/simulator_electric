import './listEconomy.style.scss';

import { Result } from "../Components";
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';

export const ListEconomy = () => {
  const context = useContext(modelsContext)
  const {currentValues, models, currentModel} = context;
  const {results} = context;


  let slidesValues =  {
    km  : currentValues[0],
    conso  : currentValues[1],
    carbu  : currentValues[2],
    elec  : currentValues[3],
  }

  //console.log(slidesValues, "slidesValues")

  const getCurrentModel = () => {
    return models.filter(model => model.name !== "e-308").filter(model => model.name === currentModel)[0]
   }

  let resultAnual =  (slidesValues.km * (slidesValues.conso / 100)  * slidesValues.carbu) - ( slidesValues.km * (getCurrentModel().WLTP_consumption / 100) * slidesValues.elec )

  const setValue = (index) => {

    if(index === 0 ){
      return Math.floor(resultAnual / 12) < 0 ? 0 :  Math.floor(resultAnual / 12)
    }
    if(index === 1 ){
      return  Math.floor(resultAnual) < 0 ? 0 :  Math.floor(resultAnual)
    }
    if(index === 2 ){
      return  Math.floor(resultAnual * 4) < 0 ? 0 :  Math.round(resultAnual * 4)
    }
  
  }

  return (
    <ul className='economyList'>
      {
        results.map((result, index) => {
          return(
            <li key={index} className='economyList-li'>
            <Result valueResult={setValue(index)}  {...result} />
          </li>
          )
        })
      }
    </ul>

  );
}

