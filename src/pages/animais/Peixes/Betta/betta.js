import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import BettaObj from "../../../../jsObjects/Peixes/bettaObj";

export const Betta = () => {
  return (
    <div>
      <SpeciePageComponent
        specieObject={BettaObj} />
    </div>
  )
}

export default Betta;