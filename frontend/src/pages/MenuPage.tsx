import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { MenuHeader } from "../components/menu/MenuHeader";


const MenuPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MenuHeader/>
      <Footer />
    </div>
  );
};

export default MenuPage;
