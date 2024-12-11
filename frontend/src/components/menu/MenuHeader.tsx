// import React from 'react';

import { useEffect, useState } from "react";
import AddMenu from "./popup/AddMenu";
import axios from "axios";
import { IMenu } from "./type";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



export const MenuHeader: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [menus, setMenus] = useState([]);
  const [menuStInd,setMenuInd]=useState(0)
  const [modifiedMenus,setModifiedMenus]=useState(menus)

  useEffect(() => {
  setModifiedMenus(menus.slice(menuStInd))
  }, [menuStInd,menus])

  console.log(modifiedMenus)

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
  console.log(menuStInd)
  const handleLeftClick=()=>{
    if(menuStInd>0){
      setMenuInd(prev=>--prev)
    }
  }

  const handleRightClick=()=>{
    if(menuStInd<menus.length-1){
      setMenuInd(prev=>++prev)
    }
  }
  // console.log(menus);
  return (
    <div className="menuHeaderBg text-2xl p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          className="bg-green-500 min-w-40 m-auto p-2 text-white  rounded hover:bg-green-600 transition"
          onClick={handleAddMenu}
        >
          Add Menu
        </button>
         <FaArrowAltCircleLeft onClick={handleLeftClick} className="text-2xl my-auto  cursor-pointer hover:scale-105"/>
         <ul className="flex gap-5   overflow-hidden  w-[calc(100vw-18rem)] ">
       
          {modifiedMenus.map((menu:IMenu,index) => (
            <li key={index} className=" cursor-pointer bg-black hover:scale-105 m-2 border-blue border min-w-40 text-center p-2">{menu.name}</li>
          ))}
        </ul>
        <FaArrowAltCircleRight onClick={handleRightClick} className="text-2xl my-auto cursor-pointer hover:scale-105"/>

      </div>
      {isPopupOpen && <AddMenu setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
};
