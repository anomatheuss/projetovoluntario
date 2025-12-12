import S from "./home.module.scss";
import Icone from "../../assets/icone.png";
import { Link } from "react-router-dom";
import Medico from "../../assets/medico.png";
export default function Home() {
  return (
    <main>
      <section className={S.container}>
        <div className={S.containerDiv}>
          <div className={S.icon}>
            <span>
              <img src={Icone} alt="Icone Otoscópico médico" />
              Saúde para todos
            </span>
          </div>
          <h1 className={S.title}>Saúde e cuidado sem barreiras</h1>
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={S.buttons}>
            <Link to="/voluntario">
              <button className={S.btnPrimary}>Seja Voluntário</button>
            </Link>

            <Link to="/voluntario">
              <button className={S.btnSecondary}>Como Ajudar</button>
            </Link>
          </div>
        </div>
        <figure className={S.image}>
          <img src={Medico} alt="Imagem do Médico Voluntário" />
        </figure>
      </section>
      <section className={S.greenbox}>
        <div className={S.box}>
          <h1>Nossa Missão</h1>
          <p>
            Transformar vidas através do acesso universal a saúde de qualidade
          </p>
        </div>
        <section className={S.maincards}>
          <article className={S.card}>
            <h2>Acesso equitativo</h2>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article className={S.card}>
            <h2>Comunidade Forte</h2>
            <p>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </article>
          <article className={S.card}>
            <h2>Bem-estar Total</h2>
            <p>
              Oferecer atendimento integral em medicina geral e odontologia para
              melhorar a qualidade de vida.
            </p>
          </article>
        </section>
      </section>
      <section className={S.containerbottom}>
        <div className={S.mainbox}>
          <h2>Nosso Impacto</h2>
          <p>
            Transformando a saúde de nossa comunidade, um paciente de cada vez
          </p>
        </div>
        <div className={S.maincards2}>
          <div className={S.card2}>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </div>
          <div className={S.card2}>
            <h3>150+</h3>
            <p>Satisfação dos Pacientes</p>
          </div>
          <div className={S.card2}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </div>
          <div className={S.card2}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </div>
        </div>
      </section>
    </main>
  );
}
