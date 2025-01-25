import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu, IMenuItem, MenuState } from "./type";


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
    addItem: (state, action: PayloadAction<{ _id: string; item: IMenuItem }>) => {
      const { _id, item } = action.payload;
      console.log(_id,item)
      const index =state.menus.findIndex(menu => menu._id === _id);
      state.menus[index].items.push(item)
      state.selectedMenu?.items.push(item)
    },
  },
  
});

export const {  addMenu,setMenus,selectMenu,addItem } = menuSlice.actions;

export default menuSlice.reducer;
