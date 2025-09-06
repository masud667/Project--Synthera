import Hero from "./components/Hero";
import ShopContent from "./components/products/ShopContent";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/home-compo/Category";
import TrendingProducts from "./components/home-compo/TrendingProducts";
import OffersSection from "./components/OffersSection";

export default function Home() {
  return (
    <>
      
 
      <HeroBanner />
       <ShopContent></ShopContent>
      <Categories></Categories>
      <TrendingProducts></TrendingProducts>
      <OffersSection />
    </>
  )
}
