import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import PeriquitoObj from "../../../../jsObjects/Passaros/passaroPeriquitoObj";

export const Periquito = () => {
  return (
    <div>
      <SpeciePageComponent
        specieObject={PeriquitoObj} />
    </div>
  )
}

export default Periquito;