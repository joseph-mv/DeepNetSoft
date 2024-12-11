export interface IMenuItem {
    name: string;
    description: string;
    price: number;
  }
  
 export interface IMenu  {
    name: string;
    description: string;
    items: IMenuItem[];
  }