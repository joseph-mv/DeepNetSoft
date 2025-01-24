import { Schema, model} from 'mongoose';

export interface IMenuItem {
  name: string;
  description: string;
  price: number;
}

interface IMenu  {
  name: string;
  description: string;
  items: IMenuItem[];
}

const MenuItemSchema = new Schema<IMenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const MenuSchema = new Schema<IMenu>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  items: [MenuItemSchema],
});



const Menu = model<IMenu>('Menu', MenuSchema);
export default Menu;
