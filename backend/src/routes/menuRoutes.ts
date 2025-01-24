import { Router } from "express";
import { createMenu, getMenus } from "../controller/menuController";

const router=Router()

router.post('/menus',createMenu)
router.get('/menus',getMenus)
export default router