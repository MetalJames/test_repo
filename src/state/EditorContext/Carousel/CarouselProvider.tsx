import { useReducer, useCallback, ReactNode } from "react";
import { CarouselContext } from "./CarouselContext";
import { CarouselReducer } from "./CarouselReducer";
import { initialCarouselState } from "./CarouselInitialState";
import { CarouselActions } from "./types";
import { CarouselImage, ImageFitMode, ImageViewMode } from "../../../types/globalTypes";

export const CarouselProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(CarouselReducer, initialCarouselState);

    const updateCarouselImages = useCallback((images: CarouselImage[]) => {
        dispatch({ type: "UPDATE_CAROUSEL_IMAGES", payload: images });
    }, []);

    const updateCarouselViewMode = useCallback(
        (viewMode: ImageViewMode) => {
        dispatch({ type: "UPDATE_CAROUSEL_VIEW_MODE", payload: viewMode });
        },
        []
    );

    const updateCarouselCornerRadius = useCallback((radius: number) => {
        dispatch({ type: "UPDATE_CAROUSEL_CORNER_RADIUS", payload: radius });
    }, []);

    const updateCarouselImageFitMode = useCallback((fitMode: ImageFitMode) => {
        dispatch({ type: "UPDATE_CAROUSEL_IMAGE_FIT_MODE", payload: fitMode });
    }, []);

    const resetCarousel = useCallback(() => {
        dispatch({ type: "RESET_STATE" });
    }, []);

    const actions: CarouselActions = {
        updateCarouselImages,
        updateCarouselViewMode,
        updateCarouselCornerRadius,
        updateCarouselImageFitMode,
        resetCarousel,
    };

    return (
        <CarouselContext.Provider value={{ state, actions }}>
            {children}
        </CarouselContext.Provider>
    );
};