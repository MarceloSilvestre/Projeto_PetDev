import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import PregoObj from "../../../../jsObjects/Macacos/macacosPrego.js";

export const Prego = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {PregoObj}/>
        </div>
    )
}

export default Prego;