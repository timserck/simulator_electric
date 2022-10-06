import './result.style.scss';
import React, { useContext, useEffect } from "react";
import modelsContext from '../Auth/models-context';


export const Result = (props) => {

  const {symbol, txt, position } = props;

  const context = useContext(modelsContext)
  const {currentValues, models, currentModel} = context;
  let slidesValues =  {
    km  : currentValues[0],
    conso  : currentValues[1],
    carbu  : currentValues[2],
    elec  : currentValues[3],
  }

  const getCurrentModel = () => {
    return models.filter(model => model.name === currentModel)[0]
   }

  return (
    <div className='result'>
      <span className="result-value">
      {txt === "Sur 1 mois" && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km) < 0 ? 0 : position === 0 && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km)  }
      {txt === "Sur 1 an" && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km) < 0 ? 0 : position === 0 && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km)  }
      {txt === "Sur 4 ans" && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km) < 0 ? 0 : position === 0 && (slidesValues.km * slidesValues.conso / 100  * slidesValues.conso ) - ( slidesValues.km * getCurrentModel().WLTP_consumption / 100 * slidesValues.km)  }
        <div className="result-symbol">{symbol}</div>
      </span>
      <p className="result-info">
          {txt}
        </p>
    </div>
  );
}

