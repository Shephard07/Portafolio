import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Perfil from "./components/Perfil/Perfil";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Certificados from "./components/Certificados/Certificados";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./App.css";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Certificados />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
