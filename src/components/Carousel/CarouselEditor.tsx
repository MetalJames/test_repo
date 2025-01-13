import './index.css';
import { useEditor } from "../../state/editorContext";
import { useState } from 'react';
import { ConfirmationModal } from '../index';

export const CarouselEditor = () => {

    const { state, actions } = useEditor();
    const { images, viewMode } = state.carousel;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageToRemove, setImageToRemove] = useState<number | null>(null);

    const handleAddImage = () => {
        const newURL = prompt("Enter Image URL:");
        if (newURL) {
            const img = new Image();
            img.src = newURL;

            img.onload = () => {
                actions.updateCarouselImages([...images, newURL]);
            };

            img.onerror = () => {
                alert("Invalid image URL. Please try again.");
            };
        }
    };

    const handleEditImage = (index: number) => {
        const newURL = prompt("Enter new Image URL:");
        if (newURL) {
            const updatedImages = [...images];
            updatedImages[index] = newURL;
            actions.updateCarouselImages(updatedImages);
        }
    };

    const handleRemoveImage = () => {
        if (imageToRemove !== null) {
            const updatedImages = images.filter((_, i) => i !== imageToRemove);
            actions.updateCarouselImages(updatedImages);
            setImageToRemove(null);
            setIsModalOpen(false);
        }
    };

    const openModal = (index: number) => {
        setImageToRemove(index);
        setIsModalOpen(true);
    };

    return (
        <div className="carousel-editor mb-6">
            <h2 className="text-lg font-semibold mb-4">Carousel Editor</h2>
            <button onClick={handleAddImage} className="btn btn-primary mb-4">
                Add Image
            </button>
            <select
                value={viewMode}
                onChange={(e) => actions.updateCarouselViewMode(e.target.value as "portrait" | "landscape" | "square")}
                className="select mb-4"
            >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="square">Square</option>
            </select>

            {/* Scrollable List */}
            <ul className="max-h-40 overflow-auto border rounded-md p-2">
                {images.length === 0 ? (
                    <li className="mb-4 text-gray-500">
                        No images added. Click "Add Image" to begin.
                    </li>
                ) : (
                    images.map((image, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between mb-2"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-20 h-20 object-cover inline-block mr-4"
                            />
                            <button
                                onClick={() => handleEditImage(index)}
                                className="btn btn-secondary mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => openModal(index)}
                                className="btn btn-danger"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                message="Are you sure you want to delete this image?"
                onConfirm={handleRemoveImage}
                onCancel={() => setIsModalOpen(false)}
            />
        </div>
    );
};