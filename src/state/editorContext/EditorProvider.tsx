import { ReactNode, useReducer } from "react";
// import { editorReducer } from "./editorReducer";
// import { EditorContext } from "./EditorContext";
// import { initialEditorState } from "./editorProviderInitState";
import { editorReducer, EditorContext, initialEditorState } from ".";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

    // Encapsulated actions
    const actions = {
        updateCarouselImages: (images: string[]) => {
            dispatch({ type: "UPDATE_CAROUSEL_IMAGES", payload: images });
        },
        updateCarouselViewMode: (viewMode: "portrait" | "landscape" | "square") => {
            dispatch({ type: "UPDATE_CAROUSEL_VIEW_MODE", payload: viewMode });
        },
        updateTextAreaTitle: (title: string) => {
            dispatch({ type: "UPDATE_TEXTAREA_TITLE", payload: title });
        },
        updateTextAreaDescription: (description: string) => {
            dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION", payload: description });
        },
        updateTextAreaTitleColor: (color: string) => {
            dispatch({ type: "UPDATE_TEXTAREA_TITLE_COLOR", payload: color });
        },
        updateTextAreaDescriptionColor: (color: string) => {
            dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR", payload: color });
        },
        updateButtonLabel: (label: string) => {
            dispatch({ type: "UPDATE_BUTTON_LABEL", payload: label });
        },
        updateButtonLink: (link: string) => {
            dispatch({ type: "UPDATE_BUTTON_LINK", payload: link });
        },
        updateButtonBackgroundColor: (color: string) => {
            dispatch({ type: "UPDATE_BUTTON_BACKGROUND_COLOR", payload: color });
        },
        updateButtonTextColor: (color: string) => {
            dispatch({ type: "UPDATE_BUTTON_TEXT_COLOR", payload: color });
        },
        resetState: () => {
            dispatch({ type: "RESET_STATE" });
        },
    };

    return (
        <EditorContext.Provider value={{ state, actions }}>
            {children}
        </EditorContext.Provider>
    );
};