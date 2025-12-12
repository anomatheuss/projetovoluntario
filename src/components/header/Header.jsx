import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import S from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={S.boxlogo}>
        <img src={Logo} alt="logo do site, coração verde" />
        <Link to="/">Médicos & Dentistas</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>

      {}
      <input type="checkbox" id="menuToggle" className={S.menuCheckbox} />

      {}
      <label htmlFor="menuToggle" className={S.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      {}
      <div className={S.mobileMenu}>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </div>
    </header>
  );
}
