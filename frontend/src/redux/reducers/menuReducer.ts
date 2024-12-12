
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenu } from './type';

export interface MenuState {
    menus: IMenu[];
  }
const initialState: MenuState = {
    menus: [],
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
     
    },
  });

  export const { setMenus, addMenu } = menuSlice.actions;

export default menuSlice.reducer;