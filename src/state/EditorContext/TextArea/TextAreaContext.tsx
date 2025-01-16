import { createContext } from "react";
import { TextAreaContextType } from "./types";
import { initialTextAreaState } from "./TextAreaInitialState";

export const TextAreaContext = createContext<TextAreaContextType>({
    state: initialTextAreaState,
    actions: {
        updateTextAreaTitle: () => null,
        updateTextAreaDescription: () => null,
        updateTextAreaTitleColor: () => null,
        updateTextAreaDescriptionColor: () => null,
        resetTextArea: () => null,
    },
});