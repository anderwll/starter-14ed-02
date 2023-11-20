import AppBar from "../components/AppBar";
import FloatButton from "../components/FloatButton";

function Home() {
  return (
    <>
      <AppBar />
      <FloatButton handleClick={ () => alert('Abrir modal!')}/>
    </>
  );
}

export default Home;
