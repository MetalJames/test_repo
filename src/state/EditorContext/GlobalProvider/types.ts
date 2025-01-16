import { useCTA } from "../CallToAction";
import { useCarousel } from "../Carousel";
import { useTextArea } from "../TextArea";

export interface GlobalContextType {
    resetAll: () => void;
    getCombinedState: () => {
        carousel: ReturnType<typeof useCarousel>["state"];
        textArea: ReturnType<typeof useTextArea>["state"];
        cta: ReturnType<typeof useCTA>["state"];
    };
}