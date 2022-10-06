import './result.style.scss';
import React, { useContext, useEffect } from "react";
import modelsContext from '../Auth/models-context';


export const Result = (props) => {

  const {symbol, txt, position } = props;

  const context = useContext(modelsContext)
  const {currentValues, models, currentModel} = context;

  let slidesValues =  {
    km  : Number(currentValues[0]),
    conso  : Number(currentValues[1]),
    carbu  : Number(currentValues[2]),
    elec  : Number(currentValues[3]),
  }



  const getCurrentModel = () => {
    return models.filter(model => model.name === currentModel)[0]
   }

  //  ( [slider kilométrage] * [slider conso carburant] / 100 * [slider coût carburant] )
  //  - 
  //  ( [slider kilométrage] * [ligne 8 du Excel pour ce véhicule] / 100 * [slider coût élec] )

  return (
    <div className='result'>
      <span className="result-value">
      {txt === "Sur 1 mois" && Math.floor(((slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec) < 0 ? 0 : (slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec)) / 12) }
      {txt === "Sur 1 an" && Math.floor(slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec) < 0 ? 0 : (slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec) } 
      {txt === "Sur 4 ans" && Math.floor(((slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec) < 0 ? 0 : (slidesValues.km * slidesValues.conso / 100  * slidesValues.carbu) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.elec)) * 4) }      
        <div className="result-symbol">{symbol}</div>
      </span>
      <p className="result-info">
          {txt}
        </p>



    </div>
  );
}

