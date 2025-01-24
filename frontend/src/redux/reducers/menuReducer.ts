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
  },
});

export const {  addMenu } = menuSlice.actions;

export default menuSlice.reducer;
