import './result.style.scss';
import React, { useContext, useEffect } from "react";
import modelsContext from '../Auth/models-context';

export const Result = (props) => {



  const context = useContext(modelsContext)
  const {currentValues} = context;


  const {value, symbol, txt} = props;

  return (
    <div className='result'>
      <span className="result-value">
        {value}
        <div className="result-symbol">{symbol}</div>
      </span>
      <p className="result-info">
          {txt}
        </p>
        <p>
          {currentValues}
        </p>
        
    </div>
  );
}

