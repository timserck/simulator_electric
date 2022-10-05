import './result.style.scss';

export const Result = (props) => {

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
    </div>
  );
}

