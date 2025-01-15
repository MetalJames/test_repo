import ReactQuill from 'react-quill';
import { InputWithLabel, ColorPicker } from '../index';
import { useEditor } from '../../state/EditorContext/useEditor';
import "react-quill/dist/quill.snow.css";

export const TextAreaEditor = () => {

    const { state, actions } = useEditor();
    const { title, titleColor, description, descriptionColor } = state.textArea;

    return (
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Text Area Editor</h2>
            <InputWithLabel 
                label="Title"
                type="text"
                value={title}
                onChange={(e) => {
                    const value = e.target.value;
                    actions.updateTextAreaTitle(value.slice(0, 30));
                    // if (value.length <= 30) {
                    //     actions.updateTextAreaTitle(e.target.value);
                    // }
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
            />
            <ColorPicker
                label="Description Color"
                value={descriptionColor}
                onChange={actions.updateTextAreaDescriptionColor}
            />
        </div>
    )
};