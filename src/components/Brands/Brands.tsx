import logo from '../../assets/images/Logo.svg'
import './brands.scss'

export default function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>
      <ul className="brands__list">
        {[1, 2, 3, 4, 5].map(brand => (
          <li key={brand}>
            <button type="button" aria-label="Ver produtos Econverse">
              <img src={logo} alt="Econverse" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
