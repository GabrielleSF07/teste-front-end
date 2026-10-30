import { useEffect, useId, useRef, useState } from 'react'
import data from '../../data/products.json'
import phone from '../../assets/images/celular.svg'
import './products.scss'

type Product = (typeof data.products)[number]
const currency = (price: number) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const filters = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

type ProductsProps = {
  showFilters?: boolean
  id?: string
}

export default function Products({ showFilters = true, id = 'produtos' }: ProductsProps) {
  const titleId = useId()
  const modalTitleId = useId()
  const [showAll, setShowAll] = useState(false)
  const track = useRef<HTMLUListElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [filter, setFilter] = useState('CELULAR')
  const [edges, setEdges] = useState({ start: true, end: false })
  const products = filter === 'CELULAR' || filter === 'VER TODOS' ? data.products : []

  useEffect(() => {
    const list = track.current
    if (!list) return
    const updateEdges = () => setEdges({
      start: list.scrollLeft <= 1,
      end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 1,
    })
    updateEdges()
    list.addEventListener('scroll', updateEdges, { passive: true })
    const observer = new ResizeObserver(updateEdges)
    observer.observe(list)
    return () => {
      list.removeEventListener('scroll', updateEdges)
      observer.disconnect()
    }
  }, [filter, showAll])

  function openProduct(product: Product) {
    setSelected(product)
    setQuantity(1)
    dialog.current?.showModal()
  }

  function move(direction: number) {
    const list = track.current
    const firstCard = list?.querySelector<HTMLElement>('.product-card')
    if (!list || !firstCard) return
    const styles = getComputedStyle(list)
    const gap = parseFloat(styles.columnGap)
    const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight)
    const step = firstCard.getBoundingClientRect().width + gap
    const visibleCards = Math.max(1, Math.round((list.clientWidth - padding + gap) / step))
    const currentCard = Math.round(list.scrollLeft / step)
    const target = (currentCard + direction * visibleCards) * step
    list.scrollTo({ left: Math.max(0, Math.min(target, list.scrollWidth - list.clientWidth)), behavior: 'smooth' })
  }

  return (
    <section className="products" aria-labelledby={titleId} id={id}>
      <h2 id={titleId}>Produtos relacionados</h2>
      {showFilters ? <div className="products__filters" aria-label="Filtrar produtos">
        {filters.map((item) => (
          <button key={item} type="button" aria-pressed={filter === item} onClick={() => {
            setFilter(item)
            track.current?.scrollTo({ left: 0 })
          }}>{item}</button>
        ))}
      </div> : <button className="products__view-all" type="button" aria-expanded={showAll} onClick={() => setShowAll(value => !value)}>
        {showAll ? 'Ver menos' : 'Ver todos'}
      </button>}
      {products.length ? (
        <div className="products__carousel">
          {!showAll && <button className="products__arrow products__arrow--previous" type="button" aria-label="Produtos anteriores" disabled={edges.start} onClick={() => move(-1)}>‹</button>}
          <ul className={`products__list${showAll ? ' products__list--all' : ''}`} ref={track}>
            {products.map((product) => (
              <li className="product-card" key={product.productName}>
                <button className="product-card__details" type="button" onClick={() => openProduct(product)}>
                  <img src={phone} alt={product.productName} loading="lazy" />
                  <h3>{product.productName}</h3>
                </button>
                <p className="product-card__price">{currency(product.price)}</p>
                <p className="product-card__installments">ou 2x de {currency(product.price / 2)} sem juros</p>
                <p className="product-card__shipping">Frete grátis</p>
                <button className="product-card__buy" type="button" onClick={() => openProduct(product)}>COMPRAR</button>
              </li>
            ))}
          </ul>
          {!showAll && <button className="products__arrow products__arrow--next" type="button" aria-label="Próximos produtos" disabled={edges.end} onClick={() => move(1)}>›</button>}
        </div>
      ) : <p className="products__empty">Nenhum produto disponível nesta categoria.</p>}
      <dialog className="product-modal" ref={dialog} aria-labelledby={modalTitleId} onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close()
      }}>
        <div className="product-modal__content">
          <button className="product-modal__close" type="button" aria-label="Fechar detalhes" onClick={() => dialog.current?.close()}>×</button>
          {selected && <>
            <img className="product-modal__image" src={phone} alt={selected.productName} />
            <div className="product-modal__info" key={selected.productName}>
              <h2 id={modalTitleId}>{selected.productName}</h2>
              <strong className="product-modal__price">{currency(selected.price)}</strong>
              <p className="product-modal__description">{selected.descriptionShort}</p>
              <details className="product-modal__details">
                <summary>Veja mais detalhes do produto &gt;</summary>
                <p>ou 2x de {currency(selected.price / 2)} sem juros. Frete grátis.</p>
              </details>
              <div className="product-modal__actions">
                <div className="product-modal__quantity" role="group" aria-label="Quantidade">
                  <button type="button" aria-label="Diminuir quantidade" disabled={quantity === 1} onClick={() => setQuantity(value => Math.max(1, value - 1))}>−</button>
                  <output aria-live="polite" aria-label="Quantidade selecionada">{String(quantity).padStart(2, '0')}</output>
                  <button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity(value => value + 1)}>+</button>
                </div>
                <button className="product-modal__buy" type="button">COMPRAR</button>
              </div>
            </div>
          </>}
        </div>
      </dialog>
    </section>
  )
}
