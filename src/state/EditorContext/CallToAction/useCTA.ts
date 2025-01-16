import { useContext } from "react";
import { CTAContext } from "./CTAContext";

export const useCTA = () => {
    const context = useContext(CTAContext);
    if (!context) {
        throw new Error("useEditor must be used within an EditorProvider");
    }
    return context;
};