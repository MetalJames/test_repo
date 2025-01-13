import { InputWithLabel, ColorPicker } from '../index';
import { useEditor } from '../../state/editorContext';

export const TextAreaEditor = () => {

    const { state, actions } = useEditor();
    const { title, titleColor, description, descriptionColor } = state.textArea;

    return (
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>

            {/* Title Section */}
            <InputWithLabel 
                label="Title"
                type="text"
                value={title}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 30) {
                        actions.updateTextAreaTitle(e.target.value);
                    }
                }}
                placeholder="Enter Title"
            />
            <p className="text-sm text-gray-500 mb-4">{title.length}/30</p>

            <ColorPicker
                label="Title Color"
                value={titleColor}
                onChange={actions.updateTextAreaTitleColor}
            />

            {/* Description Section */}
            <InputWithLabel 
                label="Description"
                type="text"
                value={description}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 80) {
                        actions.updateTextAreaDescription(e.target.value);
                    }
                }}
                placeholder="Enter Description"
            />
            <p className="text-sm text-gray-500 mb-4">{description.length}/80</p>

            <ColorPicker
                label="Description Color"
                value={descriptionColor}
                onChange={actions.updateTextAreaDescriptionColor}
            />
        </div>
    )
};