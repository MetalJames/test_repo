import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { useEditor } from "../../hooks/useEditorHook";

const CarouselPreview = () => {

    const { state } = useEditor();

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
                state.carousel.images.length > 0
                    ? state.carousel.viewMode === "portrait"
                        ? "carousel-portrait"
                        : state.carousel.viewMode === "landscape"
                        ? "carousel-landscape"
                        : "carousel-square"
                    : ""
            }`}
        >
            {state.carousel.images.length === 0 ? (
                <div className="flex items-center justify-center w-full h-[300px] bg-gray-200 rounded-md">
                    <p className="text-gray-500 text-center">Your Image Here</p>
                </div>
            ) : (
                <SliderSlick
                    key={state.carousel.images.join(",")}
                    {...settings}
                >
                    {state.carousel.images.map((image, index) => (
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
