import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent.js";
import SaguiObj from "../../../../jsObjects/Macacos/macacosSagui.js";

export const Sagui = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {SaguiObj}/>
        </div>
    )
}

export default Sagui;