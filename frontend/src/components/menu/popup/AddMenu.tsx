import axios from "axios";
import { useState } from "react";

function AddMenu({setIsPopupOpen}:{setIsPopupOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const handleFormSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    const newMenu = {
        name: menuName,
        description: menuDescription,
      };
      try{
        const response = await axios.post(BASE_URL+'/menus', newMenu);
        console.log('Menu successfully created:', response.data);
        // You can handle successful response here
        handleClosePopup();
      }catch(error){
        console.error('Error creating menu:', error);
      }
      
   handleClosePopup()
  };
  const handleClosePopup=()=>{
    setIsPopupOpen(false)
  }
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded shadow-lg ">
        <h2 className="text-xl font-bold mb-4">Add Menu</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
            
              type="text"
              className="w-full  px-3 py-2 border rounded text-white"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              required
            autoFocus
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded text-white"
              value={menuDescription}
              onChange={(e) => setMenuDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={handleClosePopup}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMenu;