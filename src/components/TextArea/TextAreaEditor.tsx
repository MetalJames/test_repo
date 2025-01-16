import { useMemo } from 'react';
import { useEditor } from '../../state/EditorContext/useEditor';
import ReactQuill from 'react-quill';
import { InputWithLabel, ColorPicker } from '../common';
import "react-quill/dist/quill.snow.css";

export const TextAreaEditor = () => {

    const { state, actions } = useEditor();
    const callTextAreaState = useMemo(() => state.textArea, [state.textArea]);
    const { title, titleColor, description, descriptionColor } = callTextAreaState;

    return (
        <div className="w-full bg-gray-50 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>
            <InputWithLabel 
                label="Title"
                type="text"
                value={title}
                onChange={(value) => {
                    const stringValue = value as string;
                    actions.updateTextAreaTitle(stringValue.slice(0, 30));
                }}
                placeholder="Enter Title"
            />
            <p className="text-sm text-gray-500 mb-4">{title.length}/30</p>
            <ColorPicker
                label="Title Color"
                value={titleColor}
                onChange={actions.updateTextAreaTitleColor}
            />
            <label className="block font-medium mb-2">Description</label>
            <ReactQuill 
                theme="snow" 
                value={description} 
                onChange={(value) => actions.updateTextAreaDescription(value)} 
                placeholder="Enter description here..."
                className="mb-2"
            />
            <ColorPicker
                label="Description Color"
                value={descriptionColor}
                onChange={actions.updateTextAreaDescriptionColor}
            />
        </div>
    )
};