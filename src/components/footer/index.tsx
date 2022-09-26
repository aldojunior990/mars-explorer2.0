import Link from "next/link";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>
        @2022 - Desenvolvido por{" "}
        <Link href="https://aldojrdev.vercel.app/">
          <a>Aldo Junior</a>
        </Link>
      </p>
    </Container>
  );
}
