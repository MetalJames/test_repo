type SaveConfigModalProps = {
    isOpen: boolean;
    state: object;
    onClose: () => void;
};

export const SaveConfigModal = ({ isOpen, state, onClose }: SaveConfigModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-[500px] max-h-[80vh] overflow-auto">
                <h2 className="text-lg font-semibold mb-4">Reducer State</h2>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 overflow-auto max-h-[300px]">
                    {JSON.stringify(state, null, 2)}
                </pre>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
