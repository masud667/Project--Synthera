import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/home-compo/Category";
import TrendingProducts from "./components/home-compo/TrendingProducts";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Categories></Categories>
      <TrendingProducts></TrendingProducts>
    </>
  )
}
