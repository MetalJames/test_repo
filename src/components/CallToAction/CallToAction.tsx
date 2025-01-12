import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import './index.css';
import InputWithLabel from '../common/InputWithLabel';

const CallToAction = () => {

    const editor = useContext(EditorContext);

    if(!editor) {
        return  null; // Handle Edge Cases
    }

    const { state, updateState } = editor;

    return (
        <div className="cta-editor p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Call to Action Editor</h2>

            {/* Button Label */}
            <InputWithLabel 
                label="Button Label"
                type="text"
                value={state.buttonLabel}
                onChange={(e) => updateState("buttonLabel", e.target.value)}
            />

            {/* Button Link */}
            <InputWithLabel 
                label="Button Link"
                type="text"
                value={state.buttonLink}
                onChange={(e) => updateState("buttonLink", e.target.value)}
            />

            {/* Button Colors */}
            <InputWithLabel 
                label="Button Background Color"
                type="color"
                value={state.buttonColor}
                onChange={(e) => updateState("buttonColor", e.target.value)}
            />

            <InputWithLabel 
                label="Button Text Color"
                type="color"
                value={state.buttonTextColor}
                onChange={(e) => updateState("buttonTextColor", e.target.value)}
            />

            {/* Preview */}
            <div className="preview mt-6 text-center">
                <a 
                    href={state.buttonLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: state.buttonColor,
                        color: state.buttonTextColor,
                    }}
                    className="inline-block px-4 py-2 rounded-md font-semibold transition hover:opacity-90"
                >
                    {state.buttonLabel}
                </a>
            </div>
        </div>
    )
}

export default CallToAction