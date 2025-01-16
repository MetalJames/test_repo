import { useMemo, useState } from 'react';
import { useEditor } from '../../state/EditorContext/useEditor';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { AddEditImageModal, FeedBackModal, ConfirmationModal, InputWithLabel, SelectWithLabel } from "../common";
import { CarouselImage, ImageFitMode, ImageViewMode } from "../../types";
import './index.css';

export const CarouselEditor = () => {

    const { state, actions } = useEditor();
    const callCarouselState = useMemo(() => state.carousel, [state.carousel]);
    const { images, viewMode, cornerRadius, imageFitMode } = callCarouselState;

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
        <div className="w-full bg-gray-50 p-4 rounded-md shadow-lg mb-4">
            <h2 className="text-lg font-semibold mb-4">Carousel Editor</h2>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <button 
                    onClick={openAddImageModal} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all"
                >
                    Add Image
                </button>
            </div>
            <ul className="h-64 overflow-auto bg-gray-100 border rounded-md p-2 space-y-2 my-4">
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
            <SelectWithLabel
                label="Display Options"
                value={viewMode}
                onChange={(value) => actions.updateCarouselViewMode(value as ImageViewMode)}
                options={[
                    { value: 'portrait', label: 'Portrait' },
                    { value: 'landscape', label: 'Landscape' },
                    { value: 'square', label: 'Square' },
                ]}
            />
            <InputWithLabel
                label="Corner Radius"
                type="range"
                min={0}
                max={50}
                value={cornerRadius}
                onChange={(value) => actions.updateCarouselCornerRadius(value as number)}
                additionalText={`Current Radius: ${cornerRadius}px`}
            />
            <SelectWithLabel
                label="Image Fit Mode"
                value={imageFitMode}
                onChange={(value) => actions.updateCarouselImageFitMode(value as ImageFitMode)}
                options={[
                    { value: 'cover', label: 'Cover' },
                    { value: 'contain', label: 'Contain' },
                    { value: 'fill', label: 'Fill' },
                ]}
            />
            <AddEditImageModal
                isOpen={isInputModalOpen}
                title={selectedImageIndex === null ? "Add New Image" : "Edit Image URL"}
                placeholder="https://example.com/image.jpg"
                value={inputValue}
                onChange={setInputValue}
                onConfirm={handleInputConfirm}
                onCancel={closeInputModal}
            />
            <FeedBackModal
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
