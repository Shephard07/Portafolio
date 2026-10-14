import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Proyectos from './components/Proyectos/Proyectos';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Proyectos />
      <Certificados />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;