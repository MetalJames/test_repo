export type ImageViewMode = "portrait" | "landscape" | "square";

export type ImageFitMode = "fill" | "contain" | "cover";

export type CarouselImage = {
    id: string,
    url: string,
    cornerRadius?: number;
    imageFitMode?: ImageFitMode,
}