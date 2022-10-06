import './fieldsetDetail.style.scss';
import { SliderDetail } from "../Components";
import { Typography } from '@mui/material';
export const FieldsetDetail = (props) => {
    //console.log(props)
    const getIdSlider = (position, index) => {

        if(position === 0){
            return 0
        }
        if(position === 1){
            return index === 0 ? 1 : 2
        }
        if(position === 2){
            return 3
        }

    }
    const { title, sliders, position } = props
    return (<fieldset className='fieldset' >
        < Typography className="fieldset-title"
            variant="h3"
            component={"h3"} > {title} </Typography> {
            sliders.map((slide, index) => {
                return (< div key={index} className='fieldset-group' >
                    < div className="fieldset-groupData" >
                        <  Typography className="fieldset-label"
                            variant="h4"
                            component={"p"} > {slide.label} </Typography> 
                            < SliderDetail idFieldset={getIdSlider(position, index)} {...slide.data} /> </div> {
                        slide.info && < Typography className="fieldset-info"
                            variant="body1"
                            component={"p"} > {slide.info} </Typography>
                    }
                </div >
                )

            })
        }

    </fieldset>
    );
}