import { CarouselImage, ImageFitMode, ImageViewMode } from "../../../types/globalTypes";
import { CarouselState } from "./types";

export const initialCarouselState: CarouselState = {
    carousel: {
        images: [] as CarouselImage[],
        viewMode: "landscape" as ImageViewMode,
        cornerRadius: 8,
        imageFitMode: "cover" as ImageFitMode,
    },
};
