import S from "./sejavoluntario.module.scss";

export default function SejaVoluntario() {
  return (
    <main>
      <section className={S.whitebox}>
        <div className={S.maintitle}>
          <h1>Seja Voluntário</h1>
          <p>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>
        </div>
        <div className={S.maincards}>
          <article className={S.card}>
            <h2>Impacto Direto</h2>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>
          <article className={S.card}>
            <h2>Crescimento Pessoal</h2>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>
          <article className={S.card}>
            <h2>Comunidade</h2>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>
      <section className={S.formSection}>
        <section className={S.whitebox}>
          <h2>Inscrição para Voluntários</h2>
          <form action="">
            <h3>Dados Pessoais</h3>
            <div className={S.boxname}>
              <label htmlFor="nome"></label>
              <input
                type="text"
                id="nome"
                placeholder="Seu Nome*"
                name="nome"
                required
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Seu Email*"
                name="email"
                required
              />
            </div>
            <div className={S.boxphone}>
              <label htmlFor="telefone"></label>
              <input
                type="tel"
                id="telefone"
                placeholder="Seu Telefone*"
                name="telefone"
              />
            </div>
            <h4>Mensagem Adicional</h4>
            <div className={S.boxvolunteer}>
              <input
                id="mensagem"
                placeholder="Conte-nos porque você quer ser voluntário..."
                name="mensagem"
                required
              />
            </div>
            <p>Entraremos em contato para mais informações</p>
            <div className={S.mainbtn}>
              <button className={S.boxbtn} type="submit">
                Enviar Inscrição
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
