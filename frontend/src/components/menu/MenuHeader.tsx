// import React from 'react';

import { useEffect, useState } from "react";
import AddMenu from "./popup/AddMenu";
import axios from "axios";
import { IMenu } from "./type";



export const MenuHeader: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [menus, setMenus] = useState([]);

  const handleAddMenu = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = async () => {
    try {
      const menu = await axios.get(BASE_URL + "/menus");
      setMenus(menu.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(menus);
  return (
    <div className="menuHeaderBg p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={handleAddMenu}
        >
          Add Menu
        </button>
        <ul className="flex gap-5">
          {menus.map((menu:IMenu) => (
            <li>{menu.name}</li>
          ))}
        </ul>

      </div>
      {isPopupOpen && <AddMenu setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
};
