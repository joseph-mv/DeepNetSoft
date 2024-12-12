import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IMenuItem } from "./type";
import { useState } from "react";
import AddItemPopup from "./popup/AddItem";
import { addItem } from "../../redux/reducers/menuReducer";

// Import your action to add a new item
// import { addItem } from "../../redux/slices/menuSlice";

export const MenuItems = () => {
  const selectedMenu = useSelector((state: RootState) => state.menus.selectedMenu);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddItem = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddNewItem = (item: { name: string; description: string; price: number }) => {
   
   dispatch(addItem({_id:selectedMenu?._id,item:item}))
        // const response = await axios.post(BASE_URL+'/menus', newMenu);
    console.log("New item added:", item);
  };

  return (
    <div className="relative h-80 border border-gray m-10">
      <button
        onClick={handleAddItem}
        className="absolute top-4  right-4 z-10 bg-green-500 text-4xl font-extrabold text-white rounded-full w-10 h-10 "
      >
        +
      </button>
     
      <h1 className="text-6xl drop-shadow-3d text-center m-2">BRUNCH COCKTAILS</h1>

      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        {selectedMenu?.items.map((item: IMenuItem,index:number) => (
          <li key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-gray-500">${item.price}</p>
          </li>
        ))}
      </ul>

      <AddItemPopup isOpen={isPopupOpen} onClose={handleClosePopup} onSubmit={handleAddNewItem} />
    </div>
  );
};
