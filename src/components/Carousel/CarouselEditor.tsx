import { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import './index.css';

const CarouselEditor = () => {
    const editor = useContext(EditorContext);

    if (!editor) {
        return null;
    }

    const { state, updateState } = editor;

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

    const handleEditImage = (index: number) => {
        const newURL = prompt("Enter new Image URL:");
        if (newURL) {
            const updatedImages = [...state.carouselImages];
            updatedImages[index] = newURL;
            updateState("carouselImages", updatedImages);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = state.carouselImages.filter((_, i) => i !== index);
        updateState("carouselImages", updatedImages);
    };

    return (
        <div className="carousel-editor mb-6">
            <h2 className="text-lg font-semibold mb-4">Carousel Editor</h2>
            <button onClick={handleAddImage} className="btn btn-primary mb-4">
                Add Image
            </button>
            <select
                value={state.viewMode}
                onChange={(e) => updateState("viewMode", e.target.value as "portrait" | "landscape" | "square")}
                className="select mb-4"
            >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="square">Square</option>
            </select>
            <ul>
                {state.carouselImages.length === 0 ? (
                    <li className="mb-4 text-gray-500">No images added. Click "Add Image" to begin.</li>
                ) : (
                    state.carouselImages.map((image, index) => (
                        <li key={index} className="mb-2">
                            <img src={image} alt={`Slide ${index}`} className="w-20 h-20 object-cover inline-block mr-4" />
                            <button onClick={() => handleEditImage(index)} className="btn btn-secondary mr-2">
                                Edit
                            </button>
                            <button onClick={() => handleRemoveImage(index)} className="btn btn-danger">
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CarouselEditor;
