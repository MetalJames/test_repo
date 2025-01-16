import { CarouselImage } from '../../types/globalTypes';
import { initialEditorState } from './ProviderInitState';
import { EditorState, EditorAction } from './types';

export const editorReducer = (state: EditorState, action: EditorAction): EditorState => {
    switch (action.type) {
        case "UPDATE_CAROUSEL_IMAGES":
        return {
            ...state,
            carousel: { ...state.carousel, images: action.payload as CarouselImage[] },
        };
        case "UPDATE_CAROUSEL_VIEW_MODE":
        return {
            ...state,
            carousel: { ...state.carousel, viewMode: action.payload },
        };
        case "UPDATE_CAROUSEL_CORNER_RADIUS":
            return {
                ...state,
                carousel: { ...state.carousel, cornerRadius: action.payload },
            };
        case "UPDATE_CAROUSEL_IMAGE_FIT_MODE":
            return {
                ...state,
                carousel: { ...state.carousel, imageFitMode: action.payload },
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
            callToAction: { ...state.callToAction, label: action.payload },
        };
        case "UPDATE_BUTTON_LINK":
        return {
            ...state,
            callToAction: { ...state.callToAction, link: action.payload },
        };
        case "UPDATE_BUTTON_BACKGROUND_COLOR":
        return {
            ...state,
            callToAction: { ...state.callToAction, backgroundColor: action.payload },
        };
        case "UPDATE_BUTTON_TEXT_COLOR":
        return {
            ...state,
            callToAction: { ...state.callToAction, textColor: action.payload },
        };
        case "RESET_STATE":
            return initialEditorState;
        default:
        return state;
    }
};
