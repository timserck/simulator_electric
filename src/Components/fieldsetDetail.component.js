import './fieldsetDetail.style.scss';
import { SliderDetail } from "../Components";
import { Typography } from '@mui/material';
export const FieldsetDetail = (props) => {
    //console.log(props)


    const { title, sliders } = props
    return ( <
        fieldset className = 'fieldset' >
        <
        Typography className = "fieldset-title"
        variant = "h3"
        component = { "h3" } > { title } <
        /Typography> {
            sliders.map((slide, index) => {
                return ( <
                    div key = { index }
                    className = 'fieldset-group' >
                    <
                    div className = "fieldset-groupData" >
                    <
                    Typography className = "fieldset-label"
                    variant = "h4"
                    component = { "p" } > { slide.label } <
                    /Typography> <
                    SliderDetail {...slide.data }
                    /> <
                    /div> {
                        slide.info && < Typography className = "fieldset-info"
                        variant = "body1"
                        component = { "p" } > { slide.info } <
                            /Typography>
                    }


                    <
                    /div >
                )

            })
        }




        <
        /fieldset>
    );
}