import { CarouselImage } from '../../../types/globalTypes';
import { initialCarouselState } from './CarouselInitialState';
import { CarouselState, CarouselAction } from './types';

export const CarouselReducer = (state: CarouselState, action: CarouselAction): CarouselState => {
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
        case "RESET_STATE":
            return initialCarouselState;
        default:
        return state;
    }
};