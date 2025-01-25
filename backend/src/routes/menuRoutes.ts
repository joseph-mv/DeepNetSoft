import { Router } from "express";
import { addMenuItem, createMenu, getMenus } from "../controller/menuController";

const router=Router()

router.post('/menus',createMenu)
router.get('/menus',getMenus)
router.post('/menus/:menuId/items',addMenuItem)
export default router