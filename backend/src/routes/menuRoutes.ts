import { Router } from "express";
import { addMenuItem, createMenu, deleteMenuItem, editMenuItem, getMenus } from "../controller/menuController";

const router=Router()

router.post('/menus',createMenu)
router.get('/menus',getMenus)
router.post('/menus/:menuId/items',addMenuItem)
router.delete('/menus/:menuId/items/:index',deleteMenuItem)
router.put('/menus/:menuId/items/:index',editMenuItem)

export default router