import { MyUseContext } from "../../hooks/myUseContext";
import { Container, Grid, Hover, Stats } from "./styles";
import Link from "next/link";

export function Hovers() {
  const { hovers } = MyUseContext();

  return (
    <Container>
      <Grid>
        {hovers.map((h) => {
          return (
            <Hover key={h.id}>
              <h2>{h.name}</h2>
              <p>{h.description}</p>
              <Link href={h.to}>
                <a>
                  <button>Buscar imagens</button>
                </a>
              </Link>
            </Hover>
          );
        })}
      </Grid>
    </Container>
  );
}
