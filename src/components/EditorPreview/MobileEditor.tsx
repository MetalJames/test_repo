import { useState } from "react";
import { useEditor } from "../../state/EditorContext/useEditor";
import { CarouselEditor, TextAreaEditor, CallToActionEditor } from "../index";
import { ConfirmationModal, SaveConfigModal } from "../common";

export const MobileEditor = () => {
    const { state, actions } = useEditor();
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenResetModal = () => setIsResetModalOpen(true);
    const handleCloseResetModal = () => setIsResetModalOpen(false);
    const handleConfirmReset = () => {
        actions.resetState();
        handleCloseResetModal();
    };

    const handleOpenSaveModal = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSaveModalOpen(true);
        }, 1000);
    };

    const handleCloseSaveModal = () => setIsSaveModalOpen(false);
    
    return (
        <div className="w-full lg:w-1/3 xl:w-1/4 bg-gray-100 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Editor Panel</h1>
            <CarouselEditor />
            <TextAreaEditor />
            <CallToActionEditor />
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleOpenResetModal}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                >
                    Reset All Fields
                </button>
                <button
                    onClick={handleOpenSaveModal}
                    disabled={isLoading}
                    className={`px-4 py-2 font-semibold rounded-md transition ${
                        isLoading
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                    {isLoading ? "Saving..." : "Save Config"}
                </button>
            </div>
            <ConfirmationModal
                isOpen={isResetModalOpen}
                message="Are you sure you want to reset all fields? This action cannot be undone."
                onConfirm={handleConfirmReset}
                onCancel={handleCloseResetModal}
            />
            <SaveConfigModal isOpen={isSaveModalOpen} state={state} onClose={handleCloseSaveModal} />
        </div>
    );
};
