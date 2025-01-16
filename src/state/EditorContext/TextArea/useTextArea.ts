import { useContext } from "react";
import { TextAreaContext } from "./TextAreaContext";

export const useTextArea = () => {
    const context = useContext(TextAreaContext);
    if (!context) {
        throw new Error("useEditor must be used within an EditorProvider");
    }
    return context;
};