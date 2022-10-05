import './App.scss';
import React, { useState } from "react";
import { Models, Details, Header } from "./Components";
import { Grid } from '@mui/material';
import ModelsContext from "./Auth/models-context";

function App() {

  const [currentModel, setCurrentModel] = useState("e-208");
  const onChangeModel = (value) => {
    setCurrentModel(value);
  };

  return (
    <ModelsContext.Provider value={{ currentModel: currentModel, onChangeModel: onChangeModel,  models: [{
      name: "e-208",
      img: "/imgs/models/recadrer/e-208_2.jpg",
       fieldsets : [{
        title: "aVOS DÉPLACEMENTS",
        sliders: [
          {
            label: "Kilométrage annuel :",
            data:{
              unit: "Km",
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '5 000 km',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '3,0 l/100 km',
                },
                {
                  value: 100,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '1,00 €/l',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '0,10 €/kWh',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '5 000 km',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '3,0 l/100 km',
                },
                {
                  value: 100,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '1,00 €/l',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '0,10 €/kWh',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '5 000 km',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '3,0 l/100 km',
                },
                {
                  value: 100,
                  label: '10,0 l/100 km',
                },
              ]
            }
            
          },
          {
            label: "Coût du carburant :",
            data:{
              unit: "€/l",
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '1,00 €/l',
                },
                {
                  value: 100,
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
              defaultValue: 80,
              step: 10,
              marks : [
                {
                  value: 0,
                  label: '0,10 €/kWh',
                },
                {
                  value: 100,
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

] }}>

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
