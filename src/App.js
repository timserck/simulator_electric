import './App.scss';
import React, { useState, useContext, useEffect } from "react";
import { Models, Details, Header } from "./Components";
import { Grid } from '@mui/material';
import ModelsContext from "./Auth/models-context";
import useMonitor from "./Hook/useMonitor";

function App() {

    const context = useContext(ModelsContext);
    const { models } = context;
    const [currentModel, setCurrentModel] = useState("e-208");
    const [currentValues, setCurrentValues] = useState(getDefaultValues);
    const [isReset, setIsReset] = useState(false);

    function getDefaultValues() {
        return models
            .filter(model => model.name === currentModel)[0].fieldsets
            .map(fieldset => fieldset.sliders)
            .map(item => item.map(item => item.data.defaultValue))
            .reduce((a, b) => a.concat(b), [])
    }

    const onChangeModel = (value) => {
        setCurrentModel(value);

    };

    const onChangeSlider = (value) => {
        setCurrentValues(Array.from(value));
    };

    const onReset = (value) => {
        setIsReset(value)
    };


    const timer = useMonitor(30);

    useEffect(() => {
        setCurrentValues(getDefaultValues());
    }, [currentModel])

    useEffect(() => {
        if (timer === 0) {
            onReset(true)
            setCurrentValues(getDefaultValues());
        }
    }, [timer])

    return ( <ModelsContext.Provider value = {
            {
                isReset: isReset,
                currentModel: currentModel,
                onChangeModel: onChangeModel,
                currentValues: currentValues,
                onChangeSlider: onChangeSlider,
                onReset: onReset,

                models: [{
                        name: "e-208",
                        WLTP_Range: 400,
                        UBE: 48.1,
                        WLTP_consumption: 14.1,
                        ICE_consumption: 5.5,
                        BEV_annualCost: 318,
                        ICE_annualCost: 1.485,
                        ECO_4ans: 4.667,
                        ECO_1ans: 1.167,
                        ECO_1mois: 97,

                        img: "imgs/models/recadrer/e-208_2.jpg",
                        fieldsets: [{
                                title: "VOS DÉPLACEMENTS",
                                sliders: [{
                                    label: "Kilométrage annuel :",
                                    data: {
                                        unit: "Km",
                                        defaultValue: 15000,
                                        step: 1000,
                                        min: 5000,
                                        max: 50000,
                                        marks: [{
                                                value: 5000,
                                                label: '5 000 km',
                                            },
                                            {
                                                value: 50000,
                                                label: '50 000 km',
                                            },
                                        ]
                                    }
                                }, ],
                            },
                            {
                                title: "COÛT DE VOTRE VÉHICULE ACTUEL",
                                sliders: [{
                                        label: "Consommation de carburant :",
                                        data: {
                                            unit: "l/100 km",
                                            defaultValue: 5.5,
                                            step: 0.5,
                                            min: 3,
                                            max: 10,
                                            marks: [{
                                                    value: 3,
                                                    label: '3.0 l/100 km',
                                                },
                                                {
                                                    value: 10,
                                                    label: '10.0 l/100 km',
                                                },
                                            ]
                                        }
                                    },
                                    {
                                        label: "Coût du carburant :",
                                        data: {
                                            unit: "€/l",
                                            defaultValue: 1.8,
                                            step: 0.05,
                                            min: 1,
                                            max: 3,
                                            marks: [{
                                                    value: 1,
                                                    label: '1.00 €/l',
                                                },
                                                {
                                                    value: 3,
                                                    label: '3.00 €/l',
                                                },
                                            ]
                                        }

                                    }
                                ],
                            },
                            {
                                title: "VOTRE CONTRAT ÉLECTRIQUE",

                                sliders: [{
                                    label: "Coût de l’électricité en €/kWh* :",
                                    data: {
                                        unit: "€/kWh",
                                        defaultValue: 0.15,
                                        step: 0.01,
                                        min: 0.1,
                                        max: 0.4,
                                        marks: [{
                                                value: 0.1,
                                                label: '0.10 €/kWh',
                                            },
                                            {
                                                value: 0.4,
                                                label: '0.40 €/kWh',
                                            },
                                        ]
                                    },
                                    info: "*En moyenne le coût de l’électricité en France est de 0.15 €/kWh."
                                }, ],
                            },
                        ]
                    },
                    {
                        name: "e-308",
                        WLTP_Range: 400,
                        UBE: 51.0,
                        WLTP_consumption: 15,
                        ICE_consumption: 6.1,
                        BEV_annualCost: 338,
                        ICE_annualCost: 1.647,
                        ECO_4ans: 5.238,
                        ECO_1ans: 1.310,
                        ECO_1mois: 109,
                        img: "imgs/models/recadrer/e-308_2.jpg",
                        fieldsets: [{
                                title: "VOS DÉPLACEMENTS",
                                sliders: [{
                                    label: "Kilométrage annuel :",
                                    data: {
                                        unit: "Km",
                                        defaultValue: 15000,
                                        step: 1000,
                                        min: 5000,
                                        max: 50000,
                                        marks: [{
                                                value: 5000,
                                                label: '5 000 km',
                                            },
                                            {
                                                value: 50000,
                                                label: '50 000 km',
                                            },
                                        ]
                                    }

                                }, ],
                            },
                            {
                                title: "COÛT DE VOTRE VÉHICULE ACTUEL",
                                sliders: [{
                                        label: "Consommation de carburant :",
                                        data: {
                                            unit: "l/100 km",
                                            defaultValue: 6,
                                            step: 0.5,
                                            min: 3,
                                            max: 10,
                                            marks: [{
                                                    value: 3,
                                                    label: '3.0 l/100 km',
                                                },
                                                {
                                                    value: 10,
                                                    label: '10.0 l/100 km',
                                                },
                                            ]
                                        }
                                    },
                                    {
                                        label: "Coût du carburant :",
                                        data: {
                                            unit: "€/l",
                                            defaultValue: 1.8,
                                            step: 0.05,
                                            min: 1,
                                            max: 3,
                                            marks: [{
                                                    value: 1,
                                                    label: '1.00 €/l',
                                                },
                                                {
                                                    value: 3,
                                                    label: '3.00 €/l',
                                                },
                                            ]
                                        }

                                    }
                                ],
                            },
                            {
                                title: "VOTRE CONTRAT ÉLECTRIQUE",
                                sliders: [{
                                    label: "Coût de l’électricité en €/kWh* :",
                                    data: {
                                        unit: "€/kWh",
                                        defaultValue: 0.15,
                                        step: 0.01,
                                        min: 0.1,
                                        max: 0.4,
                                        marks: [{
                                                value: 0.1,
                                                label: '0.10 €/kWh',
                                            },
                                            {
                                                value: 0.4,
                                                label: '0.40 €/kWh',
                                            },
                                        ]
                                    },
                                    info: "*En moyenne le coût de l’électricité en France est de 0.15 €/kWh."
                                }, ],
                            },
                        ]
                    },
                    {
                        name: "e-2008",
                        WLTP_Range: 400,
                        UBE: 51.0,
                        WLTP_consumption: 15,
                        ICE_consumption: 6,
                        BEV_annualCost: 338,
                        ICE_annualCost: 1.620,
                        ECO_4ans: 5.130,
                        ECO_1ans: 1.283,
                        ECO_1mois: 107,
                        img: "imgs/models/recadrer/e-2008_2.jpg",
                        fieldsets: [{
                                title: "VOS DÉPLACEMENTS",
                                sliders: [{
                                    label: "Kilométrage annuel :",
                                    data: {
                                        unit: "Km",
                                        defaultValue: 15000,
                                        step: 1000,
                                        min: 5000,
                                        max: 50000,
                                        marks: [{
                                                value: 5000,
                                                label: '5 000 km',
                                            },
                                            {
                                                value: 50000,
                                                label: '50 000 km',
                                            },
                                        ]
                                    }
                                }, ],
                            },
                            {
                                title: "COÛT DE VOTRE VÉHICULE ACTUEL",
                                sliders: [{
                                        label: "Consommation de carburant :",
                                        data: {
                                            unit: "l/100 km",
                                            defaultValue: 6.1,
                                            step: 0.5,
                                            min: 3,
                                            max: 10,
                                            marks: [{
                                                    value: 3,
                                                    label: '3.0 l/100 km',
                                                },
                                                {
                                                    value: 10,
                                                    label: '10.0 l/100 km',
                                                },
                                            ]
                                        }
                                    },
                                    {
                                        label: "Coût du carburant :",
                                        data: {
                                            unit: "€/l",
                                            defaultValue: 1.8,
                                            step: 0.05,
                                            min: 1,
                                            max: 3,
                                            marks: [{
                                                    value: 1,
                                                    label: '1.00 €/l',
                                                },
                                                {
                                                    value: 3,
                                                    label: '3.00 €/l',
                                                },
                                            ]
                                        }
                                    }
                                ],
                            },
                            {
                                title: "VOTRE CONTRAT ÉLECTRIQUE",
                                sliders: [{
                                    label: "Coût de l’électricité en €/kWh* :",
                                    data: {
                                        unit: "€/kWh",
                                        defaultValue: 0.15,
                                        step: 0.01,
                                        min: 0.1,
                                        max: 0.4,
                                        marks: [{
                                                value: 0.1,
                                                label: '0.10 €/kWh',
                                            },
                                            {
                                                value: 0.4,
                                                label: '0.40 €/kWh',
                                            },
                                        ]
                                    },
                                    info: "*En moyenne le coût de l’électricité en France est de 0.15 €/kWh."
                                }, ],
                            },
                        ]
                    },
                ].filter(model => model.name !== "e-308"),
                results: [{
                        value: 118,
                        symbol: "€",
                        txt: "sur 1 mois"
                    },
                    {
                        value: 118,
                        symbol: "€",
                        txt: "sur 1 an"
                    },
                    {
                        value: 118,
                        symbol: "€",
                        txt: "sur 4 ans"
                    }
                ],
            }
        } >
        < main className = "App container" >
        < Header/>
        < div className = 'l-main' >
        < Grid container spacing = { 2 } >
        < Grid item xs = { 6 } >
        < Models/>
        </Grid> < Grid item xs={6} > <Details/> </Grid> </Grid > </div> </main> </ModelsContext.Provider>
    );
}

export default App;