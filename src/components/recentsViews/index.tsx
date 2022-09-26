import Link from "next/link";
import { Container, Searchs } from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { MyUseContext } from "../../hooks/myUseContext";

export function RecentView() {
  const { recents } = MyUseContext();

  if (recents.length === 0) {
    return;
  }
  return (
    <Container>
      <h2>Ultimas pesquisas</h2>
      <main>
        {recents.map((r) => {
          return (
            <Searchs key={r.id}>
              <h2>{r.rover_name}</h2>
              <p>{r.date}</p>
              <Link href={r.to}>
                <a>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </a>
              </Link>
            </Searchs>
          );
        })}
      </main>
    </Container>
  );
}
