import { useContext } from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EditorContext } from "../../context/EditorContext";
import "./index.css";

const CarouselPreview = () => {
    const editor = useContext(EditorContext);

    if (!editor) {
        return null; // Handle Edge Cases
    }

    const { state } = editor;

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
    };

    return (
        <div
            className={`carousel-container relative ${
                state.carouselImages.length > 0
                    ? state.viewMode === "portrait"
                        ? "carousel-portrait"
                        : state.viewMode === "landscape"
                        ? "carousel-landscape"
                        : "carousel-square"
                    : ""
            }`}
        >
            {state.carouselImages.length === 0 ? (
                <div className="flex items-center justify-center w-full h-[300px] bg-gray-200 rounded-md">
                    <p className="text-gray-500 text-center">Your Image Here</p>
                </div>
            ) : (
                <SliderSlick
                    key={state.carouselImages.join(",")}
                    {...settings}
                >
                    {state.carouselImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} className="w-full object-cover" />
                        </div>
                    ))}
                </SliderSlick>
            )}
        </div>
    );
};

export default CarouselPreview;
