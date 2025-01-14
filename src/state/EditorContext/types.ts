import { CarouselImage, ImageViewMode } from "../../types";

export type EditorState = {
  carousel: {
    images: CarouselImage[];
    viewMode: ImageViewMode;
  };
  textArea: {
    title: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
  };
  button: {
    label: string;
    link: string;
    backgroundColor: string;
    textColor: string;
  };
}

export type EditorAction =
    | { type: "UPDATE_CAROUSEL_IMAGES"; payload: CarouselImage[] }
    | { type: "UPDATE_CAROUSEL_VIEW_MODE"; payload: "portrait" | "landscape" | "square" }
    | { type: "UPDATE_TEXTAREA_TITLE"; payload: string }
    | { type: "UPDATE_TEXTAREA_DESCRIPTION"; payload: string }
    | { type: "UPDATE_TEXTAREA_TITLE_COLOR"; payload: string }
    | { type: "UPDATE_TEXTAREA_DESCRIPTION_COLOR"; payload: string }
    | { type: "UPDATE_BUTTON_LABEL"; payload: string }
    | { type: "UPDATE_BUTTON_LINK"; payload: string }
    | { type: "UPDATE_BUTTON_BACKGROUND_COLOR"; payload: string }
    | { type: "UPDATE_BUTTON_TEXT_COLOR"; payload: string }
    | { type: "RESET_STATE" };

export interface EditorActions {
    updateCarouselImages: (images: CarouselImage[]) => void;
    updateCarouselViewMode: (viewMode: "portrait" | "landscape" | "square") => void;
    updateTextAreaTitle: (title: string) => void;
    updateTextAreaDescription: (description: string) => void;
    updateTextAreaTitleColor: (color: string) => void;
    updateTextAreaDescriptionColor: (color: string) => void;
    updateButtonLabel: (label: string) => void;
    updateButtonLink: (link: string) => void;
    updateButtonBackgroundColor: (color: string) => void;
    updateButtonTextColor: (color: string) => void;
    resetState: () => void;
}

export interface EditorContextType {
  state: EditorState;
  actions: EditorActions;
}