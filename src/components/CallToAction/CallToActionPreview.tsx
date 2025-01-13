import './index.css';
import { useEditor } from '../../hooks/useEditorHook';

const CallToActionPreview = () => {

    const { state } = useEditor();

    return (
        <div className="cta-editor p-4 border rounded-md shadow-md">
            {/* Preview */}
            <div className="preview mt-6 text-center">
                <a 
                    href={state.button.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: state.button.backgroundColor,
                        color: state.button.textColor,
                    }}
                    className="inline-block px-4 py-2 rounded-md font-semibold transition hover:opacity-90"
                >
                    {state.button.label || "Sample Buttom"}
                </a>
            </div>
        </div>
    )
}

export default CallToActionPreview;