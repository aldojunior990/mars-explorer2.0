import { Hovers } from "../hoverContainer";
import { Container, Description, Image } from "./styles";

export function Content() {
  return (
    <Container>
      <header>
        <Image src="mars.png" alt="Imagem de marte" />
        <Description>
          <h2>
            Preparado para explorar o <b> planeta vermelho?</b>
          </h2>

          <p>
            Encontre incriveis imagens da superficie de Marte registradas pelos
            rovers Spirit, Opportunity e Curiosity.
          </p>
        </Description>
      </header>

      <Hovers />
    </Container>
  );
}
