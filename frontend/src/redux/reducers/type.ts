export interface IMenuItem {
    name: string;
    description: string;
    price: number;
  }
  
export  interface IMenu  {
    _id?:string,
    name: string;
    description: string;
    items: IMenuItem[];
  }