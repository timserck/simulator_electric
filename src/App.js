import './App.scss';
import React, { useState, useContext } from "react";
import { Models, Details, Header } from "./Components";
import { Grid } from '@mui/material';
import ModelsContext from "./Auth/models-context";



function App() {

  const context = useContext(ModelsContext);
  const {models} = context;
  const [currentModel, setCurrentModel] = useState("e-208");
  const [currentValues, setCurrentValues] = useState(getDefaultValues);

  function getDefaultValues() {
    return models
    .filter(model => model.name === currentModel)[0].fieldsets
    .map(fieldset => fieldset.sliders)
    .map(item =>  item.map(item => item.data.defaultValue))
    .reduce((a, b) => a.concat(b), [])
  }

  const onChangeModel = (value) => {
    setCurrentModel(value);
    setCurrentValues(getDefaultValues);
  };

  const onChangeSlider = (value) => {
    console.log(value, "onChangeSlider", context.currentValues, currentValues)
    setCurrentValues(value);
  };

  return (
    <ModelsContext.Provider value={{ currentModel: currentModel, onChangeModel: onChangeModel,  
     
      onChangeSlider: onChangeSlider,
      currentValues : currentValues,
      models: [
        {
      name: "e-208",
      img: "/imgs/models/recadrer/e-208_2.jpg",
       fieldsets : [{
        title: "aVOS DÉPLACEMENTS",
        sliders: [
          {
            label: "Kilométrage annuel :",
            data:{
              unit: "Km",
              defaultValue: 5000,
              step: 3,
              min : 5000,
              max : 50000,
              marks : [
                {
                  value: 5000,
                  label: '5 000 km',
                },
                {
                  value: 50000,
                  label: '50 000 km',
                },
              ]
            }
            
          },
        ],
    
    
      },
      {
        title: "COÛT DE VOTRE VÉHICULE ACTUEL",
        sliders: [
          {
            label: "Consommation de carburant :",
            data:{
              unit: "Km",
              defaultValue: 3,
              step: 7,
              min : 3,
              max : 10,
              marks : [
                {
                  value: 3,
                  label: '3,0 l/100 km',
                },
                {
                  value: 10,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 1,
              step: 3,
              min : 1,
              max : 3,
              marks : [
                {
                  value: 1,
                  label: '1,00 €/l',
                },
                {
                  value: 3,
                  label: '3,00 €/l',
                },
              ]
            }
           
          }
        ],
    
    
      },
      {
        title: "VOTRE CONTRAT ÉLECTRIQUE",
    
        sliders: [
          {
            label: "Coût de l’électricité en kWh* :",
            data:{
              unit: "€/kWh",
              defaultValue: 0.10,
              step: 3,
              min : 0.10,
              max : 0.40,
              marks : [
                {
                  value: 0.10,
                  label: '0,10 €/kWh',
                },
                {
                  value: 0.40,
                  label: '0,40 €/kWh',
                },
              ]
            },
            info: "*En moyenne le coût de l’électricité en France est de 0,15 kWh."
          },
        ],
      },
      ]

  },
  {
      name: "e-2008",
      img: "/imgs/models/recadrer/e-2008_2.jpg",
      fieldsets : [{
        title: "bVOS DÉPLACEMENTS",
        sliders: [
          {
            label: "Kilométrage annuel :",
            data:{
              unit: "Km",
              defaultValue: 5000,
              step: 3,
              min : 5000,
              max : 50000,
              marks : [
                {
                  value: 5000,
                  label: '5 000 km',
                },
                {
                  value: 50000,
                  label: '50 000 km',
                },
              ]
            }
            
          },
        ],
    
    
      },
      {
        title: "COÛT DE VOTRE VÉHICULE ACTUEL",
        sliders: [
          {
            label: "Consommation de carburant :",
            data:{
              unit: "Km",
              defaultValue: 3,
              step: 3,
              min : 3,
              max : 10,
              marks : [
                {
                  value: 3,
                  label: '3,0 l/100 km',
                },
                {
                  value: 10,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 1,
              step: 3,
              min : 1,
              max : 3,
              marks : [
                {
                  value: 1,
                  label: '1,00 €/l',
                },
                {
                  value: 3,
                  label: '3,00 €/l',
                },
              ]
            }
           
          }
        ],
    
    
      },
      {
        title: "VOTRE CONTRAT ÉLECTRIQUE",
    
        sliders: [
          {
            label: "Coût de l’électricité en kWh* :",
            data:{
              unit: "€/kWh",
              defaultValue: 0.10,
              step: 3,
              min : 0.10,
              max : 0.40,
              marks : [
                {
                  value: 0.10,
                  label: '0,10 €/kWh',
                },
                {
                  value: 0.40,
                  label: '0,40 €/kWh',
                },
              ]
            },
            info: "*En moyenne le coût de l’électricité en France est de 0,15 kWh."
          },
        ],
      },
      ]

  },
  {
      name: "e-308",
      img: "/imgs/models/recadrer/e-308_2.jpg",
      fieldsets : [{
        title: "cVOS DÉPLACEMENTS",
        sliders: [
          {
            label: "Kilométrage annuel :",
            data:{
              unit: "Km",
              defaultValue: 5000,
              step: 3,
              min : 5000,
              max : 50000,
              marks : [
                {
                  value: 5000,
                  label: '5 000 km',
                },
                {
                  value: 50000,
                  label: '50 000 km',
                },
              ]
            }
            
          },
        ],
    
    
      },
      {
        title: "COÛT DE VOTRE VÉHICULE ACTUEL",
        sliders: [
          {
            label: "Consommation de carburant :",
            data:{
              unit: "Km",
              defaultValue: 3,
              step: 3,
              min : 3,
              max : 10,
              marks : [
                {
                  value: 3,
                  label: '3,0 l/100 km',
                },
                {
                  value: 10,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 1,
              step: 3,
              min : 1,
              max : 3,
              marks : [
                {
                  value: 1,
                  label: '1,00 €/l',
                },
                {
                  value: 3,
                  label: '3,00 €/l',
                },
              ]
            }
           
          }
        ],
    
    
      },
      {
        title: "VOTRE CONTRAT ÉLECTRIQUE",
    
        sliders: [
          {
            label: "Coût de l’électricité en kWh* :",
            data:{
              unit: "€/kWh",
              defaultValue: 0.10,
              step: 3,
              min : 0.1,
              max : 0.4,
              marks : [
                {
                  value: 0.10,
                  label: '0,10 €/kWh',
                },
                {
                  value: 0.40,
                  label: '0,40 €/kWh',
                },
              ]
            },
            info: "*En moyenne le coût de l’électricité en France est de 0,15 kWh."
          },
        ],
      },
      ]

  }

],
results : [{
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

}],

}}>

      <main className="App container">
        <Header />
        <div className='l-main'>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Models />
            </Grid>
            <Grid item xs={6}>
              <Details />
            </Grid>

          </Grid>
        </div>

      </main>
    </ModelsContext.Provider>
  );
}

export default App;
