import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu, MenuState } from "./type";


const initialState: MenuState = {
  menus: [],
  selectedMenu: null,
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {
    addMenu: (state, action: PayloadAction<IMenu>) => {
      state.menus.push(action.payload);
    }, 
    setMenus: (state, action: PayloadAction<IMenu[]>) => {
      console.log(action.payload)
      state.menus = action.payload;
      state.selectedMenu=action.payload[0]
    },
    selectMenu: (state, action: PayloadAction<{menu:IMenu}>) => {
      const {menu }= action.payload;
       state.selectedMenu=menu
    },
  },
  
});

export const {  addMenu,setMenus,selectMenu } = menuSlice.actions;

export default menuSlice.reducer;
