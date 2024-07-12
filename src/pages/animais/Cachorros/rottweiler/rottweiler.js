import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import cachorroRottweilerObj from "../../../../jsObjects/Cachorros/cachorroRottweilerObj";

const Rottweiler = () => {
    return (
        <div>
            <SpeciePageComponent
            specieObject={cachorroRottweilerObj}/>
        </div>
    )
} 
export default Rottweiler