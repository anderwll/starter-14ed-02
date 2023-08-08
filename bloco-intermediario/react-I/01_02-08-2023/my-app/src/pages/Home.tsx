import ContentCards from "../components/ContentCards";
import HomeMain from "../components/HomeMain";
import ContentImg from "../components/ContentImg";
import ContentText from "../components/ContentText";
import Footer from "../components/Footer";

function Home() {
  return (
    <HomeMain>
      <ContentImg title="Minha primeira página Vite + React" height="500px" />
      <ContentCards />
      <ContentText bgImg="../public/assets/img-phone.jpg" />
      <ContentText
        bgImg="../public/assets/img-code.jpg"
        flexDirection="row-reverse"
      />
      <ContentText bgImg="../public/assets/img-kid.png" />
      <ContentImg title="Contato" height="300px" />
      <Footer />
    </HomeMain>
  );
}

export default Home;
