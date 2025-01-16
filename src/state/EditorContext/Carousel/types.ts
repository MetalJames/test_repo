import { CarouselImage, ImageViewMode, ImageFitMode  } from "../../../types";

export type CarouselState = {
    carousel: {
        images: CarouselImage[];
        viewMode: ImageViewMode;
        cornerRadius: number;
        imageFitMode: ImageFitMode;
    };
}

export type CarouselAction =
    | { type: "UPDATE_CAROUSEL_IMAGES"; payload: CarouselImage[] }
    | { type: "UPDATE_CAROUSEL_VIEW_MODE"; payload: ImageViewMode }
    | { type: "UPDATE_CAROUSEL_CORNER_RADIUS"; payload: number }
    | { type: "UPDATE_CAROUSEL_IMAGE_FIT_MODE"; payload: ImageFitMode }
    | { type: "RESET_STATE" };

export interface CarouselActions {
    updateCarouselImages: (images: CarouselImage[]) => void;
    updateCarouselViewMode: (viewMode: ImageViewMode) => void;
    updateCarouselCornerRadius: (radius: number) => void;
    updateCarouselImageFitMode: (fitMode: ImageFitMode) => void;
    resetCarousel: () => void;
}

export interface CarouselContextType {
    state: CarouselState;
    actions: CarouselActions;
}