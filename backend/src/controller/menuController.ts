import { Request, Response } from "express";
import Menu from "../model/menu"


export const createMenu=async(req:Request,res:Response)=>{
    try{
        const menu=new Menu(req.body)
        await menu.save()
        res.status(201).json(menu)
    }catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}


    export const getMenus = async (req: Request, res: Response) => {
        try {
          const menus = await Menu.find();
          res.status(200).json(menus);
        } catch (error) {
          res.status(400).json({ error:'Internal server error' });
        }
      };
