import { ColorPicker, InputWithLabel } from '../index';
import { useEditor } from '../../state/editorContext';

export const CallToActionEditor = () => {

    const { state, actions } = useEditor();
    const { label, link, backgroundColor, textColor } = state.button

    return (
        <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Call to Action Editor</h2>
            <InputWithLabel 
                label="Button Label"
                type="text"
                value={label}
                onChange={(e) => actions.updateButtonLabel(e.target.value)}
                placeholder="Enter button text"
            />
            <InputWithLabel 
                label="Button Link"
                type="text"
                value={link}
                onChange={(e) => actions.updateButtonLink(e.target.value)}
                placeholder="Enter button link"
            />
            <ColorPicker
                label="Button Background Color"
                value={backgroundColor}
                onChange={actions.updateButtonBackgroundColor}
            />
            <ColorPicker
                label="Button Text Color"
                value={textColor}
                onChange={actions.updateButtonTextColor}
            />
        </div>
    )
}