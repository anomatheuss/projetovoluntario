import S from "./footer.module.scss";
import Coracao from "../../assets/coracao.png";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";
import Loc from "../../assets/loc.png";
export default function Footer() {
  return (
    <footer>
      <section className={S.containerblack}>
        <div className={S.boxs}>
          <div className={S.logo_wrapper}>
            <img src={Coracao} alt="Logo de coração" />
            <h2>Médicos & Dentistas</h2>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={S.maincards}>
          <div className={S.card}>
            <h3>Contato</h3>
            <ul>
              <li>
                <img src={Email} alt="Logo de email" />
                contato@medico-dentista.org
              </li>
              <li>
                <img src={Phone} alt="Logo de phone" />
                (11) 3000-0000
              </li>
              <li>
                <img src={Loc} alt="Logo de localização" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
          <div className={S.card}>
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={S.copyright}>
          <p>
            © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
            reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}
