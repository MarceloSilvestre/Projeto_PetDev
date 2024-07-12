import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent.js";
import GopherObj from "../../../../jsObjects/Cobras/cobrasGopher.js";

export const Gopher = () =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {GopherObj}/>
        </div>
    )
}

export default Gopher;