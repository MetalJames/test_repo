import { createContext } from "react";
import { EditorContextType } from "./types";
import { initialEditorState } from "./ProviderInitState";

export const EditorContext = createContext<EditorContextType>({
    state: initialEditorState,
    actions: {
        updateCarouselImages: () => null,
        updateCarouselViewMode: () => null,
        updateCarouselCornerRadius: () => null,
        updateCarouselImageFitMode: () => null, 
        updateTextAreaTitle: () => null,
        updateTextAreaDescription: () => null,
        updateTextAreaTitleColor: () => null,
        updateTextAreaDescriptionColor: () => null,
        updateButtonLabel: () => null,
        updateButtonLink: () => null,
        updateButtonBackgroundColor: () => null,
        updateButtonTextColor: () => null,
        resetState: () => null,
    },
});
