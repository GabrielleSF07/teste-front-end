import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Partners from "./components/Partners/Partners";
import Brands from "./components/Brands/Brands";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Categories />
                <Products />
                <Partners />
                <Brands />
                <Products showFilters={false} id="produtos-marcas" />
            </main>
        </>
    )
}
