import { perfil } from "../../data/portfolio";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <a className="footer-brand" href="#inicio">
          Bryan Cotrina<span>.</span>
        </a>
        <p>Una idea a la vez. Una línea a la vez.</p>
        <a className="back-top" href="#inicio">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="page-width footer-bottom">
        <span>
          © {new Date().getFullYear()} {perfil.nombre} {perfil.apellidos}
        </span>
        <span>Hecho con React y curiosidad.</span>
      </div>
    </footer>
  );
}
