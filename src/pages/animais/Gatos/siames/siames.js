import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import siamesObj from "../../../../jsObjects/Gatos/gatoSiamesObj";

export const Siames = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {siamesObj}/>
        </div>
    )
}

export default Siames;