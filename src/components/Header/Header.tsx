import './header.scss'
import shield from '../../assets/icons/ShieldCheck.svg'
import truck from '../../assets/icons/Truck.svg'
import card from '../../assets/icons/CreditCard.svg'
import logo from '../../assets/images/Logo.svg'
import magnifyinGlass from '../../assets/icons/MagnifyingGlass.svg'
import vector from '../../assets/icons/Vector.svg'
import heart from '../../assets/icons/Heart.svg'
import user from '../../assets/icons/UserCircle.svg'
import cart from '../../assets/icons/ShoppingCart.svg'
import crown from '../../assets/icons/CrownSimple.svg'

export default function Header() {
  return (
    <header>
      <section>
        <div className='top-bar'>
          <span className='top-bar-item'>
            <img src={shield} alt="" className='img-top-bar' />
            <span>Compra <strong className='highlight'>100% segura</strong></span>
          </span>
          <span className='top-bar-item'>
            <img src={truck} alt="" className='img-top-bar' />
            <span><strong className='highlight'>Frete grátis</strong> acima de R$ 200</span>
          </span>
          <span className='top-bar-item'>
            <img src={card} alt="" className='img-top-bar' />
            <span><strong className='highlight'>Parcele</strong> suas compras</span>
          </span>
        </div>

        <div className='header-main'>
          <div>
            <img src={logo} alt="Econverse" className='header-logo' />
          </div>

          <div className='search'>
            <input
              type="search"
              aria-label="Buscar produtos"
              placeholder="O que você está buscando?"
            />
            <button type="button" aria-label="Buscar">
              <img src={magnifyinGlass} alt="" />
            </button>
          </div>

          <div className='icons-header-main'>
            <button type="button" aria-label="Meus pedidos"><img src={vector} alt="" /></button>
            <button type="button" aria-label="Favoritos"><img src={heart} alt="" /></button>
            <button type="button" aria-label="Minha conta"><img src={user} alt="" /></button>
            <button type="button" aria-label="Carrinho"><img src={cart} alt="" /></button>
          </div>
        </div>
        <nav className="header-nav" aria-label="Categorias">
          <ul>
            <li><button type="button">Todas categorias</button></li>
            <li><button type="button">Supermercado</button></li>
            <li><button type="button">Livros</button></li>
            <li><button type="button">Moda</button></li>
            <li><button type="button">Lançamentos</button></li>
            <li><button type="button" className="header-nav-offers">Ofertas do dia</button></li>
            <li>
              <button type="button">
                <img src={crown} alt="" />
                Assinatura
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
