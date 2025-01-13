import { InputWithLabel, ColorPicker } from '../index';
import { useEditor } from '../../hooks/useEditorHook';

const TextAreaEditor = () => {

    const { state, dispatch } = useEditor();

    return (
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>

            {/* Title Section */}
            <InputWithLabel 
                label="Title"
                type="text"
                value={state.textArea.title}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 30) {
                        dispatch({ type: "UPDATE_TEXTAREA_TITLE", payload: e.target.value })
                    }
                }}
                placeholder="Enter Title"
            />
            <p className="text-sm text-gray-500 mb-4">{state.textArea.title.length}/30</p>

            <ColorPicker
                label="Title Color"
                value={state.textArea.titleColor}
                onChange={(newColor) => dispatch({ type: "UPDATE_TEXTAREA_TITLE_COLOR", payload: newColor })}
            />

            {/* Description Section */}
            <InputWithLabel 
                label="Description"
                type="text"
                value={state.textArea.description}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 80) {
                        dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION", payload: value });
                    }
                }}
                placeholder="Enter Description"
            />
            <p className="text-sm text-gray-500 mb-4">{state.textArea.description.length}/80</p>

            <ColorPicker
                label="Description Color"
                value={state.textArea.descriptionColor}
                onChange={(newColor) => dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR", payload: newColor })}
            />
        </div>
    )
};

export default TextAreaEditor;