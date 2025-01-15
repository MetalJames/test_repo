import './index.css';
import { useEditor } from "../../state/EditorContext/useEditor";
import { useState } from 'react';
import { AddEditImageModal } from "../common/AddEditImageModal";
import { FeedbackModal } from '../common/FeedBackModal';
import { ConfirmationModal } from '../index';
import { CarouselImage, ImageViewMode } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

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
        setInputValue(images[index].url);
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
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-lg mb-2">
            <h2 className="text-lg font-semibold mb-4">Carousel Editor</h2>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <button 
                    onClick={openAddImageModal} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all"
                >
                    Add Image
                </button>

            </div>
            <ul className="h-64 overflow-auto bg-gray-50 border rounded-md p-2 space-y-2 my-4">
                {images.length === 0 ? (
                    <li className="mb-4 text-gray-500 text-sm">
                        No images added. Click "Add Image" to begin.
                    </li>
                ) : (
                    images.map((image, index) => (
                        <li
                            key={image.id}
                            className="flex items-center justify-between p-2 rounded-md"
                        >
                            <div className="flex items-center">
                                <span className="text-sm font-semibold text-gray-600 mr-4">
                                    {index + 1}.
                                </span>
                                <img
                                    src={image.url}
                                    alt={`Slide ${index}`}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => openEditImageModal(index)}
                                    className="text-blue-500 hover:text-blue-700 transition-all"
                                    aria-label={`Edit image with ID ${image.id}`}
                                >
                                    <PencilSquareIcon className="w-7 h-7" />
                                </button>
                                <button
                                    onClick={() => openRemoveModal(index)}
                                    className="text-red-500 hover:text-red-700 transition-all"
                                    aria-label={`Delete image with ID ${image.id}`}
                                >
                                    <TrashIcon className="w-7 h-7" />
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <label className="block font-medium text-gray-700 mb-2">Display Options</label>
            <select
                value={viewMode}
                onChange={(e) => actions.updateCarouselViewMode(e.target.value as ImageViewMode)}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
            >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="square">Square</option>
            </select>
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
