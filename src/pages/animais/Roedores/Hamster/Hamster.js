import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import HamsterObj from "../../../../jsObjects/Roedores/HamsterObj";

export const Hamster = () => {
    return(
        <div>
            <SpeciePageComponent
            specieObject={HamsterObj}/>
        </div>
    )
}

export default Hamster