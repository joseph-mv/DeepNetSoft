import { Router } from "express";
import { addMenuItem, createMenu, deleteMenuItem, getMenus } from "../controller/menuController";

const router=Router()

router.post('/menus',createMenu)
router.get('/menus',getMenus)
router.post('/menus/:menuId/items',addMenuItem)
router.delete('/menus/:menuId/items/:index',deleteMenuItem)
export default router