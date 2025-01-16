import { useState } from "react";

type Props = {
    isOpen: boolean;
    state: object;
    onClose: () => void;
};

export const SaveConfigModal = (props: Props) => {

    const { isOpen, state, onClose } = props;
    const [isCopied, setIsCopied] = useState(false);

    if (!isOpen) return null;

    const downloadConfig = () => {
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        link.href = URL.createObjectURL(blob);
        link.download = `mobile-app-config-${timestamp}.json`;
        link.click();
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(state, null, 2));
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-[500px] max-h-[80vh] overflow-auto">
                <h2 className="text-xl font-bold mb-4 text-center">
                    🎉 Configuration Saved Successfully! 🎉
                </h2>
                <p className="text-gray-700 mb-4 text-center">
                    Thank you for using our editor! Your configuration is now ready to be used in your mobile application.
                </p>
                <p className="text-gray-500 mb-4 text-center text-sm">
                    If you'd like, you can download the configuration as a JSON file for further use.
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 overflow-auto max-h-[300px] mb-4">
                    {JSON.stringify(state, null, 2)}
                </pre>
                <div className="flex justify-center gap-4">
                    <button
                        aria-label="Close modal"
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Close
                    </button>
                    <button
                        aria-label="Copy configuration to clipboard"
                        onClick={handleCopyToClipboard}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                    >
                        {isCopied ? "Copied!" : "Copy Config"}
                    </button>
                    <button
                        aria-label="Download configuration as JSON file"
                        onClick={downloadConfig}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                        Download Config
                    </button>
                </div>
            </div>
        </div>
    );
};