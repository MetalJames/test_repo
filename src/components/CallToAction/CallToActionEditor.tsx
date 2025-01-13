import { ColorPicker, InputWithLabel } from '../index';
import { useEditor } from '../../hooks/useEditorHook';

const CallToActionEditor = () => {

    const { state, dispatch } = useEditor();

    return (
        <div className="cta-editor p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Call to Action Editor</h2>

            {/* Button Label */}
            <InputWithLabel 
                label="Button Label"
                type="text"
                value={state.button.label}
                onChange={(e) => dispatch({ type: "UPDATE_BUTTON_LABEL", payload: e.target.value })}
                placeholder="Enter button text"
            />

            {/* Button Link */}
            <InputWithLabel 
                label="Button Link"
                type="text"
                value={state.button.link}
                onChange={(e) => dispatch({ type: "UPDATE_BUTTON_LINK", payload: e.target.value })}
                placeholder="Enter button link"
            />

            {/* Button Colors */}
            <ColorPicker
                label="Button Background Color"
                value={state.button.backgroundColor}
                onChange={(newColor) => dispatch({ type: "UPDATE_BUTTON_BACKGROUND_COLOR", payload: newColor })}
            />

            <ColorPicker
                label="Button Text Color"
                value={state.button.textColor}
                onChange={(newColor) => dispatch({ type: "UPDATE_BUTTON_TEXT_COLOR", payload: newColor })}
            />

        </div>
    )
}

export default CallToActionEditor;