export type EditorState = {
  carousel: {
    images: string[];
    viewMode: "portrait" | "landscape" | "square";
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
    | { type: "UPDATE_CAROUSEL_IMAGES"; payload: string[] }
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