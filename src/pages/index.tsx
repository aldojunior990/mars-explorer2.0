import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Container } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
