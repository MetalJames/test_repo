import { EditorState, EditorAction } from '../types/EditorTypes';

export const editorReducer = (state: EditorState, action: EditorAction): EditorState => {
    switch (action.type) {
        case "UPDATE_CAROUSEL_IMAGES":
        return {
            ...state,
            carousel: { ...state.carousel, images: action.payload },
        };
        case "UPDATE_CAROUSEL_VIEW_MODE":
        return {
            ...state,
            carousel: { ...state.carousel, viewMode: action.payload },
        };
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
        default:
        return state;
    }
};
