import './hero.scss'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">Venha conhecer nossas<br />promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <button type="button">Ver produto</button>
      </div>
    </section>
  )
}
