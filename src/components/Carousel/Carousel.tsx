import { useContext, useState } from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EditorContext } from "../../context/EditorContext";
import "./index.css";

const Carousel = () => {
    const editor = useContext(EditorContext);
    const [viewMode, setViewMode] = useState<"portrait" | "landscape" | "square">("landscape");

    // const images = [
    //     "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-1280x640.jpg",
    //     "https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg",
    //     "https://sb.ecobnb.net/app/uploads/sites/3/2020/01/nature-1170x490.jpg",
    // ];

    if (!editor) {
        return null; // Handle Edge Cases
    }

    const { state, updateState } = editor;

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

    const handleAddImage = () => {
        const newURL = prompt("Enter Image URL:");
        if (newURL) {
            const img = new Image();
            img.src = newURL;

            img.onload = () => {
                updateState("carouselImages", [...state.carouselImages, newURL]);
            };

            img.onerror = () => {
                alert("Invalid image URL. Please try again.");
            };
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = state.carouselImages.filter((_, i) => i !== index);
        updateState("carouselImages", updatedImages);
    };

    return (
        <div
            className={`carousel-container relative w-full max-w-4xl mx-auto ${
                state.carouselImages.length > 0 ? "has-images" : ""
            }`}
        >
            <div className="controls mb-4">
                <h2 className="text-lg font-semibold mb-2">Carousel Control</h2>
                <button onClick={handleAddImage} className="btn btn-primary mr-2">
                    Add Image
                </button>
                <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value as "portrait" | "landscape" | "square")}
                    className="select"
                >
                    <option value="portrait">Portrait</option>
                    <option value="landscape">Landscape</option>
                    <option value="square">Square</option>
                </select>
            </div>

            {state.carouselImages.length > 0 ? (
                <SliderSlick
                    key={state.carouselImages.join(",")} // Force re-render on image change
                    {...settings}
                    className={`carousel-preview ${
                        viewMode === "portrait"
                            ? "carousel-portrait"
                            : viewMode === "square"
                            ? "carousel-square"
                            : "carousel-landscape"
                    }`}
                >
                    {state.carouselImages.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full object-cover"
                            />
                            <button
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </SliderSlick>
            ) : (
                <p className="text-center text-gray-500">No images in the carousel. Add some to begin!</p>
            )}
        </div>
    );
};

export default Carousel;
