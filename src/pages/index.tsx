import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Hero title={""} subTitle={""} />
  </Container>
);

export default Index;
