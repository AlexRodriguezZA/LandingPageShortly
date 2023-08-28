//Componentes
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Navbar/Nav";
import NavMobile from "./components/Navbar/NavMobile";
import Banner from "./components/Banner";
import StaticsSection from "./components/StaticsSection";
import CardInput from "./components/CardInput";

//Funciones y hooks
import { useState } from "react";

function App() {

  const [Links, setLinks] = useState([])

  return (
    <main className="w-full flex flex-col items-center">
      <NavMobile />
      <Nav />
      <Header />
      <CardInput setLinks={setLinks}/>
      <StaticsSection Links={Links}/>
      <Banner />
      <Footer />
    </main>
  );
}

export default App;
