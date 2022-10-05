import React from 'react';

// Creating the context object and passing the default values.
const modelsContext = React.createContext({
        currentModel: "e-208",
        models: [{
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

        ],
        onChangeValue: () => {},
        onChangeModel: () => {}
    }


);

export default modelsContext;