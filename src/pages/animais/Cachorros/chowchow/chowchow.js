import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import cachorroChowChowObj from "../../../../jsObjects/Cachorros/cachorroChowChowObj";

const ChowChow = () => {
    return (
        <div>
            <SpeciePageComponent
            specieObject={cachorroChowChowObj}/>
        </div>
    )

}
export default ChowChow;