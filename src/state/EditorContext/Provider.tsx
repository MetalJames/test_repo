import { useReducer, useCallback, ReactNode } from "react";
import { EditorContext } from "./Context";
import { editorReducer } from "./Reducer";
import { initialEditorState } from "./ProviderInitState";
import { CarouselImage, EditorActions } from "./types";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

    // 1) Define your callbacks that dispatch the right object to the reducer
    const updateCarouselImages = useCallback((images: CarouselImage[]) => {
        dispatch({ type: "UPDATE_CAROUSEL_IMAGES", payload: images });
    }, []);

    const updateCarouselViewMode = useCallback(
        (viewMode: "portrait" | "landscape" | "square") => {
        dispatch({ type: "UPDATE_CAROUSEL_VIEW_MODE", payload: viewMode });
        },
        []
    );

    const updateTextAreaTitle = useCallback((title: string) => {
        dispatch({ type: "UPDATE_TEXTAREA_TITLE", payload: title });
    }, []);

    const updateTextAreaDescription = useCallback((description: string) => {
        dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION", payload: description });
    }, []);

    const updateTextAreaTitleColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_TEXTAREA_TITLE_COLOR", payload: color });
    }, []);

    const updateTextAreaDescriptionColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR", payload: color });
    }, []);

    const updateButtonLabel = useCallback((label: string) => {
        dispatch({ type: "UPDATE_BUTTON_LABEL", payload: label });
    }, []);

    const updateButtonLink = useCallback((link: string) => {
        dispatch({ type: "UPDATE_BUTTON_LINK", payload: link });
    }, []);

    const updateButtonBackgroundColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_BUTTON_BACKGROUND_COLOR", payload: color });
    }, []);

    const updateButtonTextColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_BUTTON_TEXT_COLOR", payload: color });
    }, []);

    const resetState = useCallback(() => {
        dispatch({ type: "RESET_STATE" });
    }, []);

    // 2) Combine them in an object matching your `EditorActions` interface
    const actions: EditorActions = {
        updateCarouselImages,
        updateCarouselViewMode,
        updateTextAreaTitle,
        updateTextAreaDescription,
        updateTextAreaTitleColor,
        updateTextAreaDescriptionColor,
        updateButtonLabel,
        updateButtonLink,
        updateButtonBackgroundColor,
        updateButtonTextColor,
        resetState,
    };

    // 3) Provide both state and these actions
    return (
        <EditorContext.Provider value={{ state, actions }}>
        {children}
        </EditorContext.Provider>
    );
};

// import { ReactNode, useReducer } from "react";
// import { editorReducer, EditorContext, initialEditorState } from ".";

// export const EditorProvider = ({ children }: { children: ReactNode }) => {
//     const [state, dispatch] = useReducer(editorReducer, initialEditorState);

//     const actions = {
//         updateCarouselImages: (images: string[]) => {
//             dispatch({ type: "UPDATE_CAROUSEL_IMAGES", payload: images });
//         },
//         updateCarouselViewMode: (viewMode: "portrait" | "landscape" | "square") => {
//             dispatch({ type: "UPDATE_CAROUSEL_VIEW_MODE", payload: viewMode });
//         },
//         updateTextAreaTitle: (title: string) => {
//             dispatch({ type: "UPDATE_TEXTAREA_TITLE", payload: title });
//         },
//         updateTextAreaDescription: (description: string) => {
//             dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION", payload: description });
//         },
//         updateTextAreaTitleColor: (color: string) => {
//             dispatch({ type: "UPDATE_TEXTAREA_TITLE_COLOR", payload: color });
//         },
//         updateTextAreaDescriptionColor: (color: string) => {
//             dispatch({ type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR", payload: color });
//         },
//         updateButtonLabel: (label: string) => {
//             dispatch({ type: "UPDATE_BUTTON_LABEL", payload: label });
//         },
//         updateButtonLink: (link: string) => {
//             dispatch({ type: "UPDATE_BUTTON_LINK", payload: link });
//         },
//         updateButtonBackgroundColor: (color: string) => {
//             dispatch({ type: "UPDATE_BUTTON_BACKGROUND_COLOR", payload: color });
//         },
//         updateButtonTextColor: (color: string) => {
//             dispatch({ type: "UPDATE_BUTTON_TEXT_COLOR", payload: color });
//         },
//         resetState: () => {
//             dispatch({ type: "RESET_STATE" });
//         },
//     };

//     return (
//         <EditorContext.Provider value={{ state, actions }}>
//             {children}
//         </EditorContext.Provider>
//     );
// };
