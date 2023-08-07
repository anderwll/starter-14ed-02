import Card from "./Card";
import { AiOutlineDesktop, AiOutlineCheckCircle } from "react-icons/ai";
import { SlLayers } from "react-icons/sl";
import SectionCards from "./SectionCards";

function ContentCards() {
  return (
    <SectionCards>
      <Card
        icon={<AiOutlineDesktop />}
        title="Somente para desktop"
        text="Vamos aprender como utilizar um framework."
      />
      <Card
        icon={<SlLayers />}
        title="Criado com components"
        text="Utilizamos Styled Components."
      />
      <Card
        icon={<AiOutlineCheckCircle />}
        title="Fácil aproveitamento"
        text="Estamos no caminho"
      />
    </SectionCards>
  );
}

export default ContentCards;
