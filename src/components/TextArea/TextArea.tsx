import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import './index.css';
import InputWithLabel from '../common/InputWithLabel';

const TextArea = () => {

    const editor = useContext(EditorContext);

    if(!editor) {
        return null; // Handle Edge Cases
    }

    const { state, updateState } = editor;

    return (
        <div className="text-area-editor p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>

            {/* Title Section */}
            <InputWithLabel 
                label="Title"
                type="text"
                value={state.title}
                onChange={(e) => updateState("title", e.target.value)}
            />

            <InputWithLabel 
                label="Title Color"
                type="color"
                value={state.titleColor}
                onChange={(e) => updateState("titleColor", e.target.value)}
            />

            {/* Description Section */}
            <InputWithLabel 
                label="Description"
                type="text"
                value={state.description}
                onChange={(e) => updateState("description", e.target.value)}
            />

            <InputWithLabel 
                label="Description Color"
                type="color"
                value={state.descriptionColor}
                onChange={(e) => updateState("descriptionColor", e.target.value)}
            />

            {/* Preview Section */}
            <div className="preview mt-6 p-4 border rounded-md bg-gray-50">
                <h2 style={{ color: state.titleColor}} className="text-xl font-bold">{state.title}</h2>
                <p style={{ color: state.descriptionColor }} className="text-base">{state.description}</p>
            </div>
        </div>
    )
};

export default TextArea;