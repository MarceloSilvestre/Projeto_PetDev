import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import cachorroPastorAlemaoObj from "../../../../jsObjects/Cachorros/cachorroPastorAlemaoObj";

const PastorAlemao = () => {
    return (
        <div>
            <SpeciePageComponent
            specieObject={cachorroPastorAlemaoObj}/>
        </div>
    )
} 
export default PastorAlemao