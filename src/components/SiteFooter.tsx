import logo from '../assets/logo.svg';
import '../styles/site-footer.scss';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter__intro">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form">
          <div className="newsletter__fields">
            <label className="visually-hidden" htmlFor="newsletter-name">
              Seu nome
            </label>
            <input
              id="newsletter-name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />

            <label className="visually-hidden" htmlFor="newsletter-email">
              Seu e-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button type="button">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </section>

      <div className="footer-info">
        <section className="footer-info__brand" aria-label="Sobre a Econverse">
          <img src={logo} alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <nav aria-label="Redes sociais">
            <a href="#" aria-label="Instagram"><svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
             >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle className="instagram-icon__dot" cx="18" cy="6" r="1" />
            </svg></a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </nav>
        </section>

        <nav className="footer-info__links" aria-label="Links do rodapé">
          <div>
            <h2>Institucional</h2>
            <a href="#">Sobre Nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </div>

          <div>
            <h2>Ajuda</h2>
            <a href="#">Suporte</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Perguntas Frequentes</a>
          </div>

          <div>
            <h2>Termos</h2>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}