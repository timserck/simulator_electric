import './listEconomy.style.scss';

import { Result } from "../Components";

export const ListEconomy = () => {

  const results = [{
    value : 118,
    symbol: "€",
    txt : "D'économie sur 1 mois"

  },
  {
    value : 118,
    symbol: "€",
    txt : "D'économie sur 1 mois"

  },
  {
    value : 118,
    symbol: "€",
    txt : "D'économie sur 1 mois"

  }]
  return (
    <ul className='economyList'>
      {
        results.map((result, index) => {
          return(
            <li key={index} className='economyList-li'>
            <Result {...result} />
          </li>
          )
        })
      }


    </ul>

  );
}

