import logo from '../../assets/images/Logo.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import './footer.scss'

const columns = [
  { title: 'Institucional', items: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', items: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', items: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit.</p>
          <div className="footer__social" role="group" aria-label="Redes sociais">
            <button type="button" aria-label="Instagram"><img src={instagram} alt="" /></button>
            <button type="button" aria-label="Facebook"><img src={facebook} alt="" /></button>
            <button type="button" aria-label="LinkedIn"><img src={linkedin} alt="" /></button>
          </div>
        </div>
        <nav className="footer__navigation" aria-label="Informações e atendimento">
          {columns.map(column => (
            <div className="footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.items.map(item => <li key={item}><button type="button">{item}</button></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}
