import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { MenuHeader } from "../components/menu/MenuHeader";
import { MenuItems } from "../components/menu/MenuItems";


const MenuPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MenuHeader/>
      <MenuItems/>
      <Footer />
    </div>
  );
};

export default MenuPage;
