import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //for hamburger button
  const location = useLocation(); // Get the current location and using for identify active page

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed", "w-full");
    } else {
      document.body.classList.remove("fixed", "w-full");
    }
  }, [isOpen]);
  return (
    <header className="flex relative p-3 md:h-[100px] h-[40px] md:pt-12 justify-end items-center">
      <div className="absolute flex gap-2 -translate-y-[50%] top-[100%] md:left-[20%] left-[50%] -translate-x-[50%]">
        <img className="w-[86px] h-[76px]"
          style={{ width: "86px", height: "76px" }}
          src='/images/logo.png'
          alt="logo"
        />
        <div className="hidden md:flex flex-col text-[28px] font-bold">
          <h1><span className="text-600">DEEP</span> NET</h1>
          <h1 className="text-gray-500">SOFT</h1>
        </div>
      </div>
      <button className="md:hidden relative z-20 w-[30px] h-[20px] ">
        <label
          className="flex label flex-col gap-1 w-[30px] h-[20px]"
          htmlFor="burger"
        >
          <input
            className="hidden peer"
            type="checkbox"
            id="burger"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <span className="absolute top-0 block h-[4px] w-full origin-left transition-all bg-white peer-checked:rotate-45 peer-checked:left-[4.5px]"></span>
          <span className="absolute top-[50%] block h-[4px] w-full bg-white peer-checked:bg-transparent"></span>
          <span className="absolute top-[100%] block h-[4px] w-full origin-left transition-all bg-white peer-checked:-rotate-45 peer-checked:left-[4.5px] peer-checked:top-[21px]"></span>
        </label>
      </button>
      <nav
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className={`md:flex-row md:text-mainText md:relative md:right-[10%] gap-3 font-bold flex flex-col ${
          isOpen
            ? "fixed z-10 text-white h-[100vh] top-0 rounded pt-[60px] transition-all right-0 w-[200px] gap-4 flex backdrop-blur-sm bg-black bg-opacity-35 p-2 md:h-auto md:w-auto md:top-0 md:bg-transparent md:backdrop-blur-none md:text-mainText md:pt-0"
            : "fixed -right-[200px] transition-all"
        }`}
      >
        <Link
          className={`link flex items-center gap-2 p-2 hover:scale-105 ${location.pathname === '/' ? 'text-blue-600' : ''}`}
          to="/"
        >
          <span>HOME</span>
        </Link>
        <Link
          className={`link flex items-center gap-2 p-2 hover:scale-105 ${location.pathname === '/menu' ? 'text-blue-600' : ''}`}
          to="/menu"
        >
          <span>MENU</span>
        </Link>
        <Link
          className={`link flex items-center gap-2 p-2 hover:scale-105 ${location.pathname === '/make-a-reservation' ? 'text-blue-600' : ''}`}
          to="/make-a-reservation"
        >
          <span>MAKE A RESERVATION</span>
        </Link>
        <Link
          className={`link flex items-center gap-2 p-2 hover:scale-105 ${location.pathname === '/contact-us' ? 'text-blue-600' : ''}`}
          to="/contact-us"
        >
          <span>CONTACT US</span>
        </Link>
      </nav>
    </header>
  );
};
