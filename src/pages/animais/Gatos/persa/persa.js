import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import GatoPersaObj from "../../../../jsObjects/Gatos/gatoPersaObj";

export const Persa = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {GatoPersaObj}/>
        </div>
    )
}

export default Persa;