import { Content } from "../components/content";
import { Header } from "../components/header";
import { RecentView } from "../components/recentsViews";
import { Container } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <main>
        <Header />
        <Content />
        <RecentView />
      </main>
    </Container>
  );
}
