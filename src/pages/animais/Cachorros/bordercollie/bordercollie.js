import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import CachorroBorderCollieObj from "../../../../jsObjects/Cachorros/cachorroBorderCollieObj";

export const BorderCollie = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {CachorroBorderCollieObj}/>
        </div>
    )
}

export default BorderCollie;