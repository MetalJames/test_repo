import { createContext } from "react";
import { EditorState } from ".";

export const EditorContext = createContext<{
    state: EditorState;
    actions: {
        updateCarouselImages: (images: string[]) => void;
        updateCarouselViewMode: (viewMode: "portrait" | "landscape" | "square") => void;
        updateTextAreaTitle: (title: string) => void;
        updateTextAreaDescription: (description: string) => void;
        updateTextAreaTitleColor: (color: string) => void;
        updateTextAreaDescriptionColor: (color: string) => void;
        updateButtonLabel: (label: string) => void;
        updateButtonLink: (link: string) => void;
        updateButtonBackgroundColor: (color: string) => void;
        updateButtonTextColor: (color: string) => void;
        resetState: () => void;
    };
} | null>(null);