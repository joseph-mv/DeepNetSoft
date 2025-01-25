import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import AddItemPopup from "./popup/AddItem";
import { addItem } from "../../redux/reducers/menuReducer";
import axios from "axios";
import { IMenuItem } from "../../redux/reducers/type";

export const MenuItems = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  const handleAddNewItem = async (item: {
    name: string;
    description: string;
    price: number;
  }) => {
    if (selectedMenu?._id) {
      dispatch(addItem({ _id: selectedMenu?._id, item: item }));
    }

    try {
      await axios.post(`${BASE_URL}/menus/${selectedMenu?._id}/items`, item);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="min-h-[500px]  flex items-center justify-center  ">
      <div className="relative p-4 min-h-80 md:w-[80%] w-[100%] pb-40  border  border-gray m-20">
       <img className="absolute -left-10 -top-32 w-40" src="/images/cocktail2.png" alt="" />
       
        <img className="absolute right-0 bottom-0 w-40" src="/images/cocktail.png"  alt="" />
        {menus.length > 0 && (
          <button
            onClick={handleAddItem}
            className="absolute top-4  right-4 z-10 bg-green-500 text-4xl font-extrabold text-white rounded-full w-10 h-10 "
          >
            +
          </button>
        )}
       

        <h1 className="text-6xl drop-shadow-3d text-center m-4">
          BRUNCH COCKTAILS
        </h1>

        <ul className="grid   items-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
          {selectedMenu?.items.map((item: IMenuItem, index: number) => (
            <li
              key={index}
              className="p-4 m-auto  sm:max-w-[380px] w-[100%] rounded-lg shadow-md"
            >
              <div className="menu-item text-nowrap flex text-2xl font-bold justify-between border-b border-dotted pb-2">
                <span className="text-left">{item.name}</span>
                {/* <span className="">{getDots(item.name, item.price)}</span> */}
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
    </div>
  );
};
