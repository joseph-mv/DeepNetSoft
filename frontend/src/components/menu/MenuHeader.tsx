// import React from 'react';

import { useEffect, useState } from "react";
import AddMenu from "./popup/AddMenu";
import axios from "axios";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu, setMenus } from "../../redux/reducers/menuReducer.ts";
import { RootState } from "../../redux/store.ts";
import { IMenu } from "../../redux/reducers/type.ts";

export const MenuHeader: React.FC = () => {
  const dispatch = useDispatch();
  const{ menus,selectedMenu} = useSelector((state: RootState) => state.menus);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [menuStInd, setMenuInd] = useState(0);
  const [modifiedMenus, setModifiedMenus] = useState(menus);

  useEffect(() => {
    setModifiedMenus(menus.slice(menuStInd));
  }, [menuStInd, menus]);

  const handleAddMenu = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    getMenus();
  }, [isPopupOpen]);

  const getMenus = async () => {
    try {
      const menus = await axios.get(BASE_URL + "/menus");
      dispatch(setMenus(menus.data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleLeftClick = () => {
    if (menuStInd > 0) {
      setMenuInd((prev) => --prev);
    }
  };

  const handleRightClick = () => {
    if (menuStInd < menus.length - 1) {
      setMenuInd((prev) => ++prev);
    }
  };
  const handleSelect = (menu: IMenu) => {
console.log(menu,"first render")
    dispatch(selectMenu({ menu }));
  };
  return (
    <div className="menuHeaderBg text-xl p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          className="bg-green-500 cursor-pointer sm:min-w-40 text-nowrap m-auto p-2 text-white  rounded hover:bg-green-600 transition"
          onClick={handleAddMenu}
        >
          Add Menu
        </button>
        <FaArrowAltCircleLeft
          onClick={handleLeftClick}
          className="relative z-10 text-2xl my-auto  cursor-pointer hover:scale-105"
        />
        <ul className="flex gap-5   overflow-hidden  sm:w-[calc(100vw-18rem)] w-[calc(100vw-15rem)]">
          {modifiedMenus?.map((menu: IMenu, index) => (
            <li
              onClick={() => handleSelect( menu)}
              key={index}
              className={`  cursor-pointer  hover:scale-105 m-2 border-blue-600 border min-w-40 text-center p-2 ${selectedMenu?._id==menu._id ? "bg-blue-600": 'bg-black'}`}
            >
              {menu.name}
            </li>
          ))}
        </ul>
       
        <FaArrowAltCircleRight
          onClick={handleRightClick}
          className="text-2xl my-auto cursor-pointer hover:scale-105"
        />
      </div>
      {isPopupOpen && <AddMenu setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
};
