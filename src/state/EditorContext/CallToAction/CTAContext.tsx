import { createContext } from "react";
import { CTAContextType } from "./types";
import { initialCTAState } from "./CTAInitialState";

export const CTAContext = createContext<CTAContextType>({
    state: initialCTAState,
    actions: {
        updateButtonLabel: () => null,
        updateButtonLink: () => null,
        updateButtonBackgroundColor: () => null,
        updateButtonTextColor: () => null,
        resetCTA: () => null,
    },
});