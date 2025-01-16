import { ColorPicker, InputWithLabel } from '../index';
// import { useCTA } from '../../state/EditorContext/CallToAction/useCTA';
import { useEditor } from '../../state/EditorContext/useEditor';
import { useMemo } from 'react';

export const CallToActionEditor = () => {

    const { state, actions } = useEditor();
    const callToActionState = useMemo(() => state.button, [state.button]);
    const { label, link, backgroundColor, textColor } = callToActionState;
    console.log(label)

    return (
        <div className="w-full bg-gray-50 p-4 rounded-lg shadow-md mb-2">
            <h2 className="text-lg font-semibold mb-4">Call to Action Editor</h2>
            <InputWithLabel 
                label="Button Label"
                type="text"
                value={label}
                onChange={(value) => actions.updateButtonLabel(value as string)}
                placeholder="Enter button text"
            />
            <InputWithLabel 
                label="Button Link"
                type="text"
                value={link}
                onChange={(value) => actions.updateButtonLink(value as string)}
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