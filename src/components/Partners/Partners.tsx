import './partners.scss'

export default function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {[1, 2].map(partner => (
        <article className="partners__card" key={partner}>
          <div className="partners__content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit<br />amet, consectetur</p>
            <button type="button">CONFIRA</button>
          </div>
        </article>
      ))}
    </section>
  )
}
