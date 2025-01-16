import { useReducer, useCallback, ReactNode, useMemo } from "react";
import { EditorContext } from "./Context";
import { editorReducer } from "./Reducer";
import { initialEditorState } from "./ProviderInitState";
import { EditorActions } from "./types";
import { CarouselImage, ImageFitMode, ImageViewMode } from "../../types/globalTypes";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(editorReducer, initialEditorState);

    const updateCarouselImages = useCallback((images: CarouselImage[]) => {
        dispatch({ type: "UPDATE_CAROUSEL_IMAGES", payload: images });
    }, []);

    const updateCarouselViewMode = useCallback(
        (viewMode: ImageViewMode) => {
        dispatch({ type: "UPDATE_CAROUSEL_VIEW_MODE", payload: viewMode });
        },
        []
    );

    const updateCarouselCornerRadius = useCallback((radius: number) => {
        dispatch({ type: "UPDATE_CAROUSEL_CORNER_RADIUS", payload: radius });
    }, []);

    const updateCarouselImageFitMode = useCallback((fitMode: ImageFitMode) => {
        dispatch({ type: "UPDATE_CAROUSEL_IMAGE_FIT_MODE", payload: fitMode });
    }, []);

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

    const actions: EditorActions = useMemo (() => ({
        updateCarouselImages,
        updateCarouselViewMode,
        updateCarouselCornerRadius,
        updateCarouselImageFitMode,
        updateTextAreaTitle,
        updateTextAreaDescription,
        updateTextAreaTitleColor,
        updateTextAreaDescriptionColor,
        updateButtonLabel,
        updateButtonLink,
        updateButtonBackgroundColor,
        updateButtonTextColor,
        resetState,
    }), [
        updateCarouselImages,
        updateCarouselViewMode,
        updateCarouselCornerRadius,
        updateCarouselImageFitMode,
        updateTextAreaTitle,
        updateTextAreaDescription,
        updateTextAreaTitleColor,
        updateTextAreaDescriptionColor,
        updateButtonLabel,
        updateButtonLink,
        updateButtonBackgroundColor,
        updateButtonTextColor,
        resetState,
    ]);

    const contexValue = useMemo(() => ({ state, actions }), [ state, actions ]);

    return (
        <EditorContext.Provider value={contexValue}>
            {children}
        </EditorContext.Provider>
    );
};