

import { Request, Response } from "express";
import Menu from "../model/menu";


export const createMenu = async (req: Request, res: Response) => {
  try {
    const menu = new Menu(req.body);
    console.log(menu)
    const savedMenu = await menu.save();
    const savedMenuId = savedMenu._id; 
    res.status(201).json(savedMenuId);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find({},{name:1,description:1,items:1,_id:1});
    res.status(200).json(menus);
  } catch (error) {
    res.status(400).json({ error: "Internal server error" });
  }
};

export const addMenuItem = async (req: Request, res: Response) => {
  const { menuId } = req.params;
  try {
    const menu = await Menu.findById(menuId);

    if (!menu) {
       res.status(404).send('Menu not found');
    }else{
      menu.items.push(req.body);
      await menu.save();
      res.status(200).send('Menu item added successfully');
    }
    
  } catch (error) {
    res.status(500).send('Error adding menu item: ');
  }
}

export const deleteMenuItem = async (req: Request, res: Response) => {
  const { menuId,index } = req.params;
  console.log(req.params)
  try {
    const menu = await Menu.findById(menuId);

    if (!menu) {
       res.status(404).send('Menu not found');
    }else{
      menu.items.splice(+index, 1)
      await menu.save();
      res.status(200).send('Menu item deleted successfully');
    }
    
  } catch (error) {
    res.status(500).send('Error deleting menu item: ');
  }
}



