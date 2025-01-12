import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import InputWithLabel from '../common/InputWithLabel';
import ColorPicker from '../common/ColorPicker';

const TextArea = () => {

    const editor = useContext(EditorContext);

    if(!editor) {
        return null; // Handle Edge Cases
    }

    const { state, updateState } = editor;

    return (
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>

            {/* Title Section */}
            <InputWithLabel 
                label="Title"
                type="text"
                value={state.title}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 30) {
                        updateState("title", value);
                    }
                }}
            />
            <p className="text-sm text-gray-500 mb-4">{state.title.length}/30</p>

            <ColorPicker
                label="Title Color"
                value={state.titleColor}
                onChange={(newColor) => updateState("titleColor", newColor)}
            />

            {/* Description Section */}
            <InputWithLabel 
                label="Description"
                type="text"
                value={state.description}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 80) {
                        updateState("description", value);
                    }
                }}
            />
            <p className="text-sm text-gray-500 mb-4">{state.description.length}/80</p>

            <ColorPicker
                label="Description Color"
                value={state.descriptionColor}
                onChange={(newColor) => updateState("descriptionColor", newColor)}
            />
        </div>
    )
};

export default TextArea;