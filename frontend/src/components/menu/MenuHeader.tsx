import { useState } from "react";
import AddMenu from "./popup/AddMenu";

export const MenuHeader: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleAddMenu = () => {
    setIsPopupOpen(true);
  };
  return (
    <div className="menuHeaderBg text-xl p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          className="bg-green-500 sm:min-w-40 text-nowrap m-auto p-2 text-white  rounded hover:bg-green-600 transition cursor-pointer"
          onClick={handleAddMenu}
        >
          Add Menu
        </button>
      </div>
      {isPopupOpen && <AddMenu setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
};
