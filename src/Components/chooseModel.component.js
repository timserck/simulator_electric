import { Typography } from '@mui/material';
import './chooseModel.style.scss';
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';

export const ChooseModel = (props) => {

    
    const context = useContext(modelsContext)
    const {name, img} = props;
    const {currentModel} = context;



    const handleChangeModel = () => {
        context.onChangeModel(name)

    }


    return (
        <button onClick={handleChangeModel}>
            <div className={`choose ${name === currentModel ? "choose-active"  : ""}`}>
                <img src={img} className='choose-img' alt="choose img" />
               <Typography variant='body1' component={"p"} className="choose-title">
               {name}
               </Typography>
            </div>
        </button>
    );
}
