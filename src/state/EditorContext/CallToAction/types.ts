export type CTAState = {
    button: {
        label: string;
        link: string;
        backgroundColor: string;
        textColor: string;
    };
}

export type CTAAction =
    | { type: "UPDATE_BUTTON_LABEL"; payload: string }
    | { type: "UPDATE_BUTTON_LINK"; payload: string }
    | { type: "UPDATE_BUTTON_BACKGROUND_COLOR"; payload: string }
    | { type: "UPDATE_BUTTON_TEXT_COLOR"; payload: string }
    | { type: "RESET_STATE" };

export interface CTAActions {
    updateButtonLabel: (label: string) => void;
    updateButtonLink: (link: string) => void;
    updateButtonBackgroundColor: (color: string) => void;
    updateButtonTextColor: (color: string) => void;
    resetCTA: () => void;
}

export interface CTAContextType {
    state: CTAState;
    actions: CTAActions;
}