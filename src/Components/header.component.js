import './header.style.scss';
import { Typography } from '@mui/material';
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <img className='header-brand' src="/imgs/Peugeot-Brand-Icon-RVB-DBG.png" alt="brand peugeot" />
      <Typography className="header-title" variant="h1" component="h1">
      CALCULEZ VOS ÉCONOMIES EN PASSANT À L’ÉLECTRIQUE
      </Typography>
      </div>
    </header>
  );
}

