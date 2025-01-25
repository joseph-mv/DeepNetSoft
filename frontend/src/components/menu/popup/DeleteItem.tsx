
interface DeletePopupProps {
  isOpen: boolean;
  message?: string;
  onClose: () => void;
  onConfirm: (index:number) => void;
  index: number; // index of the item to be deleted in the menu items array
}

const DeletePopup: React.FC<DeletePopupProps> = ({ isOpen, message = "Are you sure you want to delete?", onClose, onConfirm,index }) => {
 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-all animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4 text-black">{message}</h2>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 cursor-pointer py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 cursor-pointer py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            onClick={()=>onConfirm(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
