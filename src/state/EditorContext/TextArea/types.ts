export type TextAreaState = {
    textArea: {
        title: string;
        description: string;
        titleColor: string;
        descriptionColor: string;
    };
}

export type TextAreaAction =
    | { type: "UPDATE_TEXTAREA_TITLE"; payload: string }
    | { type: "UPDATE_TEXTAREA_DESCRIPTION"; payload: string }
    | { type: "UPDATE_TEXTAREA_TITLE_COLOR"; payload: string }
    | { type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR"; payload: string }
    | { type: "RESET_STATE" };

export interface TextAreaActions {
    updateTextAreaTitle: (title: string) => void;
    updateTextAreaDescription: (description: string) => void;
    updateTextAreaTitleColor: (color: string) => void;
    updateTextAreaDescriptionColor: (color: string) => void;
    resetTextArea: () => void;
}

export interface TextAreaContextType {
    state: TextAreaState;
    actions: TextAreaActions;
}