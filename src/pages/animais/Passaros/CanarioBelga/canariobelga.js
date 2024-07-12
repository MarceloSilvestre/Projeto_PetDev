import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import CanarioBelgaObj from "../../../../jsObjects/Passaros/passaroCanarioBelgaObj";

export const CanarioBelga = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {CanarioBelgaObj}/>
        </div>
    )
}

export default CanarioBelga;