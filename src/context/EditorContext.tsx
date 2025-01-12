import { createContext, useState, ReactNode } from 'react';
import { EditorState } from '../types/EditorTypes';

// Create the context
const EditorContext = createContext<{
    state: EditorState;
    updateState: (key: keyof EditorState, value: string | string[]) => void;
} | null>(null);

// Default state
const defaultStates: EditorState = {
    carouselImages: [],
    title: "Sample Title",
    description: "Sample Description",
    titleColor: "#000",
    descriptionColor: "#000",
    buttonLabel: "Click Me",
    buttonLink: "https://example.com",
    buttonColor: "#000",
    buttonTextColor: "#fff",
    viewMode: "landscape",
};

// Create the provider
const EditorProvider = ({ children } : { children: ReactNode }) => {
    const [state, setState] = useState<EditorState>(defaultStates);

    const updateState = (key: keyof EditorState, value: string | string[] | "portrait" | "landscape" | "square") => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <EditorContext.Provider value={{ state, updateState }}>
            {children}
        </EditorContext.Provider>
    );
};

export { EditorContext, EditorProvider };