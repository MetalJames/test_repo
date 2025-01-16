import { useReducer, useCallback, ReactNode } from "react";
import { TextAreaContext } from "./TextAreaContext";
import { TextAreaReducer } from "./TextAreaReducer";
import { TextAreaActions } from "./types";
import { initialTextAreaState } from "./TextAreaInitialState";

export const TextAreaProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(TextAreaReducer, initialTextAreaState);

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

    const resetTextArea = useCallback(() => {
        dispatch({ type: "RESET_STATE" });
    }, []);

    const actions: TextAreaActions = {
        updateTextAreaTitle,
        updateTextAreaDescription,
        updateTextAreaTitleColor,
        updateTextAreaDescriptionColor,
        resetTextArea,
    };

    return (
        <TextAreaContext.Provider value={{ state, actions }}>
            {children}
        </TextAreaContext.Provider>
    );
};