export interface EditorState {
  carouselImages: string[]; // Array of image URLs
  title: string; // Title text
  description: string; // Description text
  titleColor: string; // Hex color for title
  descriptionColor: string; // Hex color for description
  buttonLabel: string; // Button text
  buttonLink: string; // Button URL
  buttonColor: string; // Hex color for button
  buttonTextColor: string;
  viewMode: "portrait" | "landscape" | "square";
}