import React, { useState } from 'react';

interface AddItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: { name: string; description: string; price: number }) => void;
}

const AddItemPopup: React.FC<AddItemPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 text-xl flex items-center justify-center bg-black/50 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-black font-semibold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              className="mt-1 bg-black block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Description</label>
            <input
              type="text"
              name="description"
              value={newItem.description}
              onChange={handleChange}
              className="mt-1 bg-black block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Price</label>
            <input
              type="number"
              name="price"
              value={newItem.price}
              onChange={handleChange}
              className="mt-1 bg-black block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPopup;
