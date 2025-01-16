import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

export const useCarousel = () => {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error("useEditor must be used within an EditorProvider");
    }
    return context;
};