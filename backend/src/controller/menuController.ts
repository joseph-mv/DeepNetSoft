

import { Request, Response } from "express";


export const createMenu = async (req: Request, res: Response) => {
  try {
  console.log(req.body)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



