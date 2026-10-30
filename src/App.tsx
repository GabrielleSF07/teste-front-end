import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Categories />
                <Products />
            </main>
        </>
    )
}
