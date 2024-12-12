import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IMenuItem } from "./type";
import { useState } from "react";
import AddItemPopup from "./popup/AddItem";
import { addItem } from "../../redux/reducers/menuReducer";
import { getDots } from "../../utils/getdots";
import axios from "axios";

// import { addItem } from "../../redux/slices/menuSlice";

export const MenuItems = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const { selectedMenu, menus } = useSelector(
    (state: RootState) => state.menus
  );
  console.log(selectedMenu, "selectedMenu");
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddItem = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddNewItem = async(item: {
    name: string;
    description: string;
    price: number;
  }) => {
    if (selectedMenu?._id) {
      dispatch(addItem({ _id: selectedMenu?._id, item: item }));
    }

    try {
      await axios.post(`${BASE_URL}/menus/${selectedMenu?._id}/items`,item );
      
    
    } catch (error) {
      console.error('Error adding item:',error);
      
    }
    
  };

  return (
    <div className="relative h-80 border border-gray m-10">
      {menus.length > 0 && (
        <button
          onClick={handleAddItem}
          className="absolute top-4  right-4 z-10 bg-green-500 text-4xl font-extrabold text-white rounded-full w-10 h-10 "
        >
          +
        </button>
      )}

      <h1 className="text-6xl drop-shadow-3d text-center m-2">
        BRUNCH COCKTAILS
      </h1>

      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        {selectedMenu?.items.map((item: IMenuItem, index: number) => (
          <li
            key={index}
            className="p-4 m-4 border border-gray-300 w-[380px] rounded-lg shadow-md"
          >
            <div className="menu-item text-nowrap flex text-2xl font-bold justify-between border-b border-dotted pb-2">
              <span className="text-left">{item.name}</span>
              <span className="">{getDots(item.name,item.price)}</span>
              <span className="text-right">$ {item.price}</span>
            </div>

            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <AddItemPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleAddNewItem}
      />
    </div>
  );
};
