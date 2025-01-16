import { initialTextAreaState } from './TextAreaInitialState';
import { TextAreaState, TextAreaAction } from './types';

export const TextAreaReducer = (state: TextAreaState, action: TextAreaAction): TextAreaState => {
    switch (action.type) {
        case "UPDATE_TEXTAREA_TITLE":
        return {
            ...state,
            textArea: { ...state.textArea, title: action.payload },
        };
        case "UPDATE_TEXTAREA_DESCRIPTION":
        return {
            ...state,
            textArea: { ...state.textArea, description: action.payload },
        };
        case "UPDATE_TEXTAREA_TITLE_COLOR":
        return {
            ...state,
            textArea: { ...state.textArea, titleColor: action.payload },
        };
        case "UPDATE_TEXTAREA_DESCRIPTION_COLOR":
        return {
            ...state,
            textArea: { ...state.textArea, descriptionColor: action.payload },
        };
        case "RESET_STATE":
        return initialTextAreaState;
        default:
        return state;
    }
};