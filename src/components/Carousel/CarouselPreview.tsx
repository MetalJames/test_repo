import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { useEditor } from "../../state/editorContext";
import { NextArrow, PrevArrow } from "./PrevNextArrow";

export const CarouselPreview = () => {

    const { state } = useEditor();
    const { images, viewMode } = state.carousel;

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div
            className={`carousel-container relative ${
                images.length > 0
                    ? viewMode === "portrait"
                        ? "carousel-portrait"
                        : viewMode === "landscape"
                        ? "carousel-landscape"
                        : "carousel-square"
                    : ""
            }`}
        >
            {images.length === 0 ? (
                <div className="flex items-center justify-center w-full h-[300px] bg-gray-200 rounded-md">
                    <p className="text-gray-500 text-center">Your Image Here</p>
                </div>
            ) : (
                <SliderSlick
                    key={images.join(",")}
                    {...settings}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img 
                                src={image} 
                                alt={`Slide ${index}`} 
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </SliderSlick>
            )}
        </div>
    );
};