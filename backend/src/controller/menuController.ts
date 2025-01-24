

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



