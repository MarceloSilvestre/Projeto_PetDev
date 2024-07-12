import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import cachorroGoldenRetrieverObj from "../../../../jsObjects/Cachorros/cachorroGoldenRetrieverObj";

const GoldenRetriever = () => {
    return (
        <div>
            <SpeciePageComponent
            specieObject={cachorroGoldenRetrieverObj}/>
        </div>
    )
} 
export default GoldenRetriever