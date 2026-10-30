import './newsletter.scss'

export default function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__intro">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className="newsletter__form" onSubmit={event => event.preventDefault()}>
          <div className="newsletter__fields">
            <input type="text" name="name" aria-label="Seu nome" placeholder="Digite seu nome" autoComplete="name" required />
            <input type="email" name="email" aria-label="Seu e-mail" placeholder="Digite seu e-mail" autoComplete="email" required />
            <button type="submit">INSCREVER</button>
          </div>
          <label className="newsletter__consent">
            <input type="checkbox" name="terms" required />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}
