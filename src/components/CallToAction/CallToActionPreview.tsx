import { useEditor } from '../../state/EditorContext/useEditor';

export const CallToActionPreview = () => {

    const { state } = useEditor();
    const { label, link, backgroundColor, textColor } = state.button;

    return (
        <div className="p-4 border rounded-md shadow-md">
            <div className="preview mt-6 text-center">
                <a 
                    href={link}
                    target='_blank'
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: backgroundColor,
                        color: textColor,
                    }}
                    className="inline-block px-4 py-2 rounded-md font-semibold transition hover:opacity-90"
                    aria-label={`Call to action: ${label || 'No Label'}`}
                >
                    {label || "Sample Buttom"}
                </a>
            </div>
        </div>
    )
}