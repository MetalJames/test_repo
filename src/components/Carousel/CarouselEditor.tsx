import './index.css';
import { useEditor } from "../../state/EditorContext/useEditor";
import { useState } from 'react';
import { AddEditImageModal } from "../common/AddEditImageModal";
import { FeedbackModal } from '../common/FeedBackModal';
import { ConfirmationModal } from '../index';
import { CarouselImage, ImageViewMode } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const CarouselEditor = () => {

    const { state, actions } = useEditor();
    const { images, viewMode } = state.carousel;

    const [inputValue, setInputValue] = useState("");
    const [isInputModalOpen, setIsInputModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackButtonLabel, setFeedbackButtonLabel] = useState("OK");
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    const openAddImageModal = () => {
        setSelectedImageIndex(null);
        setIsInputModalOpen(true);
    };

    const openEditImageModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsInputModalOpen(true);
    };

    const openRemoveModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsRemoveModalOpen(true);
    };

    const handleInputConfirm = (value: string) => {
        const img = new Image();
        img.src = value;

        img.onload = () => {
            if (selectedImageIndex === null) {
                const newImage: CarouselImage = { id: uuidv4(), url: value };
                actions.updateCarouselImages([...images, newImage]);
                setFeedbackMessage("Image added successfully!");
            } else {
                const updatedImages = [...images];
                updatedImages[selectedImageIndex] = {
                    ...updatedImages[selectedImageIndex],
                    url: value,
                };
                actions.updateCarouselImages(updatedImages);
                setFeedbackMessage("Image updated successfully!");
            }
            setInputValue("");
            setFeedbackButtonLabel("OK");
            setIsFeedbackModalOpen(true);
            setIsInputModalOpen(false);
        };

        img.onerror = () => {
            setFeedbackMessage("Invalid image URL. Please try again.");
            setFeedbackButtonLabel("Try Again");
            setIsFeedbackModalOpen(true);
        };
    };

    const handleRemoveConfirm = () => {
        if (selectedImageIndex !== null) {
            const updatedImages = images.filter((_, i) => i !== selectedImageIndex);
            actions.updateCarouselImages(updatedImages);
            setSelectedImageIndex(null);
            setIsRemoveModalOpen(false);
        }
    };

    const closeInputModal = () => {
        setInputValue("");
        setIsInputModalOpen(false);
    };

    return (
        <div className="carousel-editor mb-6">
            <h2 className="text-lg font-semibold mb-4">Carousel Editor</h2>
            <button onClick={openAddImageModal} className="btn btn-primary mb-4">
                Add Image
            </button>
            <select
                value={viewMode}
                onChange={(e) => actions.updateCarouselViewMode(e.target.value as ImageViewMode)}
                className="select mb-4"
            >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="square">Square</option>
            </select>
            <ul className="h-64 overflow-auto border rounded-md p-2">
                {images.length === 0 ? (
                    <li className="mb-4 text-gray-500">
                        No images added. Click "Add Image" to begin.
                    </li>
                ) : (
                    images.map((image, index) => (
                        <li
                            key={image.id}
                            className="flex items-center justify-between mb-2"
                        >
                            <img
                                src={image.url}
                                alt={`Slide ${index}`}
                                className="w-20 h-20 object-cover inline-block mr-4"
                            />
                            <button
                                onClick={() => openEditImageModal(index)}
                                className="btn btn-secondary mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => openRemoveModal(index)}
                                className="btn btn-danger"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <AddEditImageModal
                isOpen={isInputModalOpen}
                title={selectedImageIndex === null ? "Add New Image" : "Edit Image URL"}
                placeholder="https://example.com/image.jpg"
                value={inputValue}
                onChange={setInputValue}
                onConfirm={handleInputConfirm}
                onCancel={closeInputModal}
            />
            <FeedbackModal
                isOpen={isFeedbackModalOpen}
                message={feedbackMessage}
                buttonLabel={feedbackButtonLabel}
                onClose={() => setIsFeedbackModalOpen(false)}
            />
            <ConfirmationModal
                isOpen={isRemoveModalOpen}
                message="Are you sure you want to delete this image?"
                onConfirm={handleRemoveConfirm}
                onCancel={() => setIsRemoveModalOpen(false)}
            />
        </div>
    );
};
