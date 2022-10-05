import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';


const theme = createTheme({

    palette: {
        primary: {
            main: "#4da3e0",
        },
    },
    typography: {
        fontFamily: [
            'peugeot_newblack',
            'peugeot_newblack_italic',
            'peugeot_newbold',
            'peugeot_newextralight',
            'peugeot_newitalic',
            'peugeot_newlight_italic',
            'peugeot_newregular',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontFamily: "peugeot_newbold",
            fontSize: 34,
            textTransform: "uppercase",
            fontWeight: "bold"
        },
        h2: {
            fontFamily: "peugeot_newbold",
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: "bold"
        },
        h3: {
            fontFamily: "peugeot_newbold",
            fontSize: 16,
        },
        h4: {
            fontFamily: 'peugeot_newregular',
            fontSize: 14,
        },
        h5: {

        },
        h6: {

        },
        subtitle1: {
            fontFamily: 'peugeot_newregular'
        },
        body1: {
            fontSize: 11,
            fontFamily: 'peugeot_newregular'
        },
        body2: {
            fontSize: 10,
            fontFamily: 'peugeot_newregular'
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< React.StrictMode >
    < ThemeProvider theme={theme} >
        < App />

    </ThemeProvider>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();