type Props = {
    isOpen: boolean;
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: (value: string) => void;
    onCancel: () => void;
};

export const AddEditImageModal = (props: Props) => {

    const { isOpen, title, placeholder, value, onChange, onConfirm, onCancel } = props;

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-edit-image-modal-title"
        >
            <div className="bg-white p-6 rounded-md shadow-md w-[400px]">
                <h2 
                    id="add-edit-image-modal-title"
                    className="text-lg font-bold mb-4 text-center"
                >
                    {title}
                </h2>
                <label className="sr-only" htmlFor="image-url-input">
                    Image URL
                </label>
                <input
                    id="image-url-input"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onConfirm(value)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};
