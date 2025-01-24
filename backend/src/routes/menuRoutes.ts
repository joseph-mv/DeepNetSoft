import { Router } from "express";
import { createMenu } from "../controller/menuController";

const router=Router()

router.post('/menus',createMenu)
export default router