import { initialCTAState } from './CTAInitialState';
import { CTAState, CTAAction } from './types';

export const CTAReducer = (state: CTAState, action: CTAAction): CTAState => {
    switch (action.type) {
        case "UPDATE_BUTTON_LABEL":
        return {
            ...state,
            button: { ...state.button, label: action.payload },
        };
        case "UPDATE_BUTTON_LINK":
        return {
            ...state,
            button: { ...state.button, link: action.payload },
        };
        case "UPDATE_BUTTON_BACKGROUND_COLOR":
        return {
            ...state,
            button: { ...state.button, backgroundColor: action.payload },
        };
        case "UPDATE_BUTTON_TEXT_COLOR":
        return {
            ...state,
            button: { ...state.button, textColor: action.payload },
        };
        case "RESET_STATE":
            return initialCTAState;
        default:
        return state;
    }
};