import './listEconomy.style.scss';

import { Result } from "../Components";
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';

export const ListEconomy = () => {
  const context = useContext(modelsContext)
  const {results} = context;

  return (
    <ul className='economyList'>
      {
        results.map((result, index) => {
          return(
            <li key={index} className='economyList-li'>
            <Result  {...result} />
          </li>
          )
        })
      }
    </ul>

  );
}

