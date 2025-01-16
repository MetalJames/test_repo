type Props = {
    isOpen: boolean;
    message: string;
    buttonLabel: string;
    onClose: () => void;
};

export const FeedBackModal = (props: Props) => {

    const { isOpen, message, buttonLabel, onClose } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-[300px]">
                <p className="text-gray-800 text-center mb-4">{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};
