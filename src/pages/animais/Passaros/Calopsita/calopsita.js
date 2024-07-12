import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import CalopsitaObj from "../../../../jsObjects/Passaros/passaroCalopsitaObj";

export const Calopsita = () => {
  return (
    <div>
      <SpeciePageComponent
        specieObject={CalopsitaObj} />
    </div>
  )
}

export default Calopsita;