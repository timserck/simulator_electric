import './details.style.scss';
import { FieldsetDetail, Economy } from "../Components";
import { Typography } from '@mui/material';
export const Details = () => {

  const fieldsets = [{
    title: "VOS DÉPLACEMENTS",
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
  return (
    <>
      <Typography className="details-title" variant="h2" component={"h2"}>
        CHOISISSEZ UN VÉHICULE 100% ÉLECTRIQUE
      </Typography>
      <form action="" className="details">
        {
          fieldsets.map((data, index) => {
            return <FieldsetDetail key={index} {...data} />
          })
        }
      </form>
      <Economy />
    </>
  );
}

