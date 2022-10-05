import './listModel.style.scss';
import { ChooseModel } from "../Components";
import React, { useContext } from "react";
import modelsContext from '../Auth/models-context';
export const ListModel = () => {
const context = useContext(modelsContext)
    return (
        <ul className='listModel'>
            {
                context.models.map(( model, index)=>{
                    return (
                        <li key={index} className='listModel-li'>
                        <ChooseModel {...model} />
                    </li>
                    )


                })
            }

        </ul>
    );
}