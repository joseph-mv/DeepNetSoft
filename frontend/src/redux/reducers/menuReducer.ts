
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenu, IMenuItem } from './type';

export interface MenuState {
    menus: IMenu[];
    selectedMenu:IMenu | null;
  }
const initialState: MenuState = {
    menus: [],
    selectedMenu:null
  };

  const menuSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
      setMenus: (state, action: PayloadAction<IMenu[]>) => {
        console.log(action.payload)
        state.menus = action.payload;
      },
      addMenu: (state, action: PayloadAction<IMenu>) => {
        console.log(action.payload)
        state.menus.push(action.payload);
      },
      selectMenu: (state, action: PayloadAction<{menu:IMenu}>) => {
        const {menu }= action.payload;
         state.selectedMenu=menu
      },
      addItem: (state, action: PayloadAction<{ _id: string; item: IMenuItem }>) => {
        const { _id, item } = action.payload;
        console.log(_id,item)
        const menu =state.menus.find(menu =>{ 
          console.log(menu)
          return menu._id === _id});
        console.log(menu)
        if (menu) {
          menu.items.push(item);
          
        }
      },
    },
  });

  export const { setMenus, addMenu,selectMenu,addItem } = menuSlice.actions;

export default menuSlice.reducer;