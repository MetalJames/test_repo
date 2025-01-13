import { ReactNode, useReducer } from "react";
import { editorReducer } from "../reducers/editorReducer";
import { EditorState } from "../types/EditorTypes";
import { EditorContext } from "./EditorContext";

const initialEditorState: EditorState = {
    carousel: { images: [], viewMode: "landscape" },
    textArea: {
        title: "Sample Title",
        description: "Sample Description",
        titleColor: "#000000",
        descriptionColor: "#000000",
    },
    button: {
        label: "Click Me",
        link: "https://example.com",
        backgroundColor: "#000000",
        textColor: "#ffffff",
    },
};

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

    return (
        <EditorContext.Provider value={{ state, dispatch }}>
            {children}
        </EditorContext.Provider>
    );
};