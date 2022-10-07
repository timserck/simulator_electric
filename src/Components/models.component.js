import './models.style.scss';
import { ListModel, SelectedModel } from "../Components";
import { Typography } from '@mui/material';
export const Models = () => {
  return (
    <>
    <div className="models">
     <section className='chooseModels' >
       <Typography className="models-title" variant="h2" component={"h2"}>
        <span className="models-stepper" >1</span>
       CHOISISSEZ UN VÉHICULE 100% ÉLECTRIQUE
       </Typography>
       <ListModel/>
     </section>
     <SelectedModel/>
    </div>

        <Typography className="models-copy" variant="body2" component={"p"}>
        Le simulateur fournit une estimation purement indicative des économies potentiellement réalisables en choisissant ce véhicule électrique et en la comparant à une voiture à moteur thermique actuelle de l’utilisateur. Les utilisateurs saisissent indépendamment les données relatives au nombre de kilomètres et aux coûts énergétiques, et Stellantis n’assume aucune responsabilité à cet égard. Les valeurs de consommation électrique du véhicule présenté dans le simulateur sont basées sur le cycle WLTC. Ces valeurs sont indiquées afin de permettre la comparaison des données de différents véhicules et peuvent ne pas être représentatives des valeurs réelles de consommation d’énergie, qui dépendent de multiples facteurs tels que le style de conduite, l’itinéraire, les conditions météorologiques et routières, l’état, les habitudes d’utilisation et l’équipement du véhicule, etc. L’estimation obtenue ne doit, en aucun cas, être considérée comme une garantie d’économies réelles. Stellantis n’assume aucune responsabilité quant à l’exactitude et à la fiabilité de l’estimation des économies potentielles calculées à l’aide du simulateur. Stellantis n’est pas responsable de toute décision d’achat d’un véhicule électrique par les utilisateurs sur la base des résultats fournis par le simulateur ; de même, Stellantis n’est pas responsable de toute informations concernant ce véhicule électrique fournies par le simulateur.
        </Typography>

        </>
  );
}

