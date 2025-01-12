import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import './index.css';

const CallToAction = () => {

    const editor = useContext(EditorContext);

    if(!editor) {
        return  null; // Handle Edge Cases
    }

    const { state } = editor;

    return (
        <div className="cta-editor p-4 border rounded-md shadow-md">
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