import { useEditor } from '../../state/editorContext';

export const TextAreaPreview = () => {

    const { state } = useEditor();
    const { title, titleColor, description, descriptionColor } = state.textArea;

    return (
        <div className="w-full bg-gray-100 p-6 h-52 flex flex-col justify-center">
            {/* Title */}
            <h2
                style={{ color: titleColor }}
                className="text-2xl font-bold mb-2 break-words"
            >
                {title || "Sample Name"}
            </h2>

            {/* Divider */}
            <hr className="border-gray-300 my-2" />

            {/* Description Label */}
            <p className="text-lg font-semibold text-gray-600 mb-2">
                Description
            </p>

            {/* Description */}
            <p
                style={{ color: descriptionColor }}
                className="text-base text-gray-700 h-24 break-words overflow-hidden"
            >
                {description || "Here we will display customer's description."}
            </p>
        </div>
    )
};