import './result.style.scss';



export const Result = (props) => {

  const {symbol, txt, valueResult } = props;


  //  ( [slider kilométrage] * [slider conso carburant] / 100 * [slider coût carburant] )
  //  - 
  //  ( [slider kilométrage] * [ligne 8 du Excel pour ce véhicule] / 100 * [slider coût élec] )

  return (
    <div className='result'>
      <span className="result-value">
    {valueResult}
        <div className="result-symbol">{symbol}</div>
      </span>
      <p className="result-info">
          {txt}
        </p>
    </div>
  );
}

