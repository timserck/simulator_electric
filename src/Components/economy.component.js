import './economy.style.scss';
import { ListEconomy } from "../Components";
import { Typography } from '@mui/material';

export const Economy = () => {
    return ( <
        section className = 'economy' >
        <
        Typography variant = 'h2'
        component = { "h2" }
        className = 'economy-title' >
        Vos Economies <
        /Typography> <
        ListEconomy / >
        <
        /section>
    );
}