import { useReducer, useCallback, ReactNode } from "react";
import { EditorContext } from "./Context";
import { editorReducer } from "./Reducer";
import { initialEditorState } from "./ProviderInitState";
import { EditorActions } from "./types";
import { CarouselImage } from "../../types/globalTypes";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

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

    return (
        <EditorContext.Provider value={{ state, actions }}>
        {children}
        </EditorContext.Provider>
    );
};


// What the Feedback Suggests:

// Split Contexts: You can create separate contexts for carousel, textArea, and button to localize updates. For example:
// tsx
// Copy code
// <CarouselProvider>
//   <TextAreaProvider>
//     <ButtonProvider>
//       <App />
//     </ButtonProvider>
//   </TextAreaProvider>
// </CarouselProvider>
// This ensures only the specific context re-renders when a related part of the state changes.
// Memoize Updates: Use React.memo or useMemo to optimize state selectors and avoid unnecessary renders.