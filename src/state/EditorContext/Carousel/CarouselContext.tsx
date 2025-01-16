import { createContext } from "react";
import { CarouselContextType } from "./types";
import { initialCarouselState } from "./CarouselInitialState";

export const CarouselContext = createContext<CarouselContextType>({
    state: initialCarouselState,
    actions: {
        updateCarouselImages: () => null,
        updateCarouselViewMode: () => null,
        updateCarouselCornerRadius: () => null,
        updateCarouselImageFitMode: () => null,
        resetCarousel: () => null,
    },
});