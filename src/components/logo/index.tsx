import { Container } from "./styles";

import { BiRocket } from "react-icons/bi";

export function Logo() {
  return (
    <Container>
      <b>
        <BiRocket />
      </b>
      <p>Mars explorer</p>
    </Container>
  );
}
