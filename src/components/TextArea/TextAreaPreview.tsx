import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';

const TextAreaPreview = () => {

    const editor = useContext(EditorContext);

    if(!editor) {
        return null; // Handle Edge Cases
    }

    const { state } = editor;

    return (
        <div className="w-full bg-gray-100 p-6 h-52 flex flex-col justify-center">
            {/* Title */}
            <h2
                style={{ color: state.textArea.titleColor }}
                className="text-2xl font-bold mb-2 break-words"
            >
                {state.textArea.title || "Sample Name"}
            </h2>

            {/* Divider */}
            <hr className="border-gray-300 my-2" />

            {/* Description Label */}
            <p className="text-lg font-semibold text-gray-600 mb-2">
                Description
            </p>

            {/* Description */}
            <p
                style={{ color: state.textArea.descriptionColor }}
                className="text-base text-gray-700 h-24 break-words overflow-hidden"
            >
                {state.textArea.description || "Here we will display customer's description."}
            </p>
        </div>
    )
};

export default TextAreaPreview;