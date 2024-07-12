import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import CornSnakeObj from "../../../../jsObjects/Cobras/cobrasCornSnake.js";

export const CornSnake = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {CornSnakeObj}/>
        </div>
    )
}

export default CornSnake;