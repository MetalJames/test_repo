import { useState } from "react";
import { CarouselEditor, TextAreaEditor, CallToActionEditor } from "../index";
import { useEditor } from "../../state/editorContext/useEditorHook";
import { ConfirmationModal, SaveConfigModal } from "../index";

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
        }, 2000);
    };

    const handleCloseSaveModal = () => setIsSaveModalOpen(false);

    return (
        <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Editor Panel</h1>
            <CarouselEditor />
            <TextAreaEditor />
            <CallToActionEditor />

            {/* Reset & Save Buttons */}
            <div className="mt-6 flex gap-4 justify-center">
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

            {/* Reset Confirmation Modal */}
            <ConfirmationModal
                isOpen={isResetModalOpen}
                message="Are you sure you want to reset all fields? This action cannot be undone."
                onConfirm={handleConfirmReset}
                onCancel={handleCloseResetModal}
            />

            {/* Save Config Modal */}
            <SaveConfigModal
                isOpen={isSaveModalOpen}
                state={state}
                onClose={handleCloseSaveModal}
            />
        </div>
    );
};
