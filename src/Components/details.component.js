import './details.style.scss';
import { FieldsetDetail, Economy } from "../Components";
import { Typography } from '@mui/material';
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';

export const Details = () => {
  const context = useContext(modelsContext)
  const {currentModel, models} = context

  const getCurrentModel = (currentModel) => {
   return models.filter(model => model.name === currentModel)[0]
  }

  return (
    <>
      <Typography className="details-title" variant="h2" component={"h2"}>
      CALCULEZ VOTRE CONSOMMATION
      </Typography>
      <form action="" className="details">
        {
          getCurrentModel(currentModel).fieldsets.map((data, index) => {
            return <FieldsetDetail key={index} {...data} />
          })
        }
      </form>
      <Economy />
    </>
  );
}

