import { EditorState } from "./types";

export const initialEditorState: EditorState = {
    carousel: { 
        images: [], 
        viewMode: "landscape",
        cornerRadius: 8,
        imageFitMode: "cover",
    },
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