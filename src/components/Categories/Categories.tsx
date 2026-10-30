import monitor from '../../assets/icons/monitor.svg'
import supermarket from '../../assets/icons/supermercados.svg'
import drinks from '../../assets/icons/whiskey.svg'
import tools from '../../assets/icons/ferramentas.svg'
import health from '../../assets/icons/saude.svg'
import fitness from '../../assets/icons/corrida.svg'
import fashion from '../../assets/icons/moda.svg'
import './categories.scss'

const categories = [
  { name: 'Tecnologia', icon: monitor },
  { name: 'Supermercado', icon: supermarket },
  { name: 'Bebidas', icon: drinks },
  { name: 'Ferramentas', icon: tools },
  { name: 'Saúde', icon: health },
  { name: 'Esportes e Fitness', icon: fitness },
  { name: 'Moda', icon: fashion },
]

export default function Categories() {
  return (
    <section className="categories" aria-label="Categorias de produtos">
      <ul className="categories__list">
        {categories.map((category, index) => (
          <li key={category.name}>
            <button
              type="button"
              className={`categories__item${index === 0 ? ' categories__item--featured' : ''}`}
            >
              <span className="categories__image">
                <img src={category.icon} alt="" />
              </span>
              <span className="categories__label">{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
