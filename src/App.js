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
      datas: {},

  },
  {
      name: "e-2008",
      img: "/imgs/models/recadrer/e-2008_2.jpg",
      datas: {},

  },
  {
      name: "e-308",
      img: "/imgs/models/recadrer/e-308_2.jpg",
      datas: {},

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
