import { useReducer, useCallback, ReactNode } from "react";
import { CTAContext } from "./CTAContext";
import { CTAReducer } from "./CTAReducer";
import { initialCTAState } from "./CTAInitialState";
import { CTAActions } from "./types";

export const CTAProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(CTAReducer, initialCTAState);

    const updateButtonLabel = useCallback((label: string) => {
        dispatch({ type: "UPDATE_BUTTON_LABEL", payload: label });
    }, []);

    const updateButtonLink = useCallback((link: string) => {
        dispatch({ type: "UPDATE_BUTTON_LINK", payload: link });
    }, []);

    const updateButtonBackgroundColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_BUTTON_BACKGROUND_COLOR", payload: color });
    }, []);

    const updateButtonTextColor = useCallback((color: string) => {
        dispatch({ type: "UPDATE_BUTTON_TEXT_COLOR", payload: color });
    }, []);

    const resetCTA = useCallback(() => {
        dispatch({ type: "RESET_STATE" });
    }, []);

    const actions: CTAActions = {
        updateButtonLabel,
        updateButtonLink,
        updateButtonBackgroundColor,
        updateButtonTextColor,
        resetCTA
    };

    return (
        <CTAContext.Provider value={{ state, actions }}>
            {children}
        </CTAContext.Provider>
    );
};