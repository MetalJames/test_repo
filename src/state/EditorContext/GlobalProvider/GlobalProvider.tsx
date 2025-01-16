import { ReactNode } from "react";
import { CarouselProvider, useCarousel } from "../Carousel";
import { TextAreaProvider, useTextArea } from "../TextArea";
import { CTAProvider, useCTA } from "../CallToAction";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    return (
        <CarouselProvider>
            <TextAreaProvider>
                <CTAProvider>
                    <GlobalProviderContent>{children}</GlobalProviderContent>
                </CTAProvider>
            </TextAreaProvider>
        </CarouselProvider>
    );
};

const GlobalProviderContent = ({ children }: { children: ReactNode }) => {
    const { state: carouselState, actions: carouselActions } = useCarousel();
    const { state: textAreaState, actions: textAreaActions } = useTextArea();
    const { state: ctaState, actions: ctaActions } = useCTA();

    const resetAll = () => {
        carouselActions.resetCarousel();
        textAreaActions.resetTextArea();
        ctaActions.resetCTA();
    };

    const getCombinedState = () => ({
        carousel: carouselState,
        textArea: textAreaState,
        cta: ctaState,
    });

    return (
        <GlobalContext.Provider value={{ resetAll, getCombinedState }}>
            {children}
        </GlobalContext.Provider>
    );
};
