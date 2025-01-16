import React, { useState, useEffect } from 'react';
import { FeedBackModal } from '.';

type Props = {
    label: string;
    value: string;
    onChange: (newColor: string) => void;
};

export const ColorPicker = (props: Props) => {

    const { label, value, onChange } = props;
    
    const [color, setColor] = useState(value);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackButtonLabel, setFeedbackButtonLabel] = useState("OK");

    // Sync local state with external value
    useEffect(() => {
        setColor(value);
    }, [value]);

    const normalizeHex = (hex: string) => {
        if (/^#([A-Fa-f0-9]{3})$/.test(hex)) {
            return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
        }
        return hex;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.trim();
        if (input.length > 7) {
            input = input.slice(0, 7);
        }
        setColor(input);
    };

    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColor(newColor);
        onChange(newColor);
    };

    const handleConfirm = () => {
        const normalizedColor = normalizeHex(color);
        if (/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(normalizedColor)) {
            onChange(normalizedColor);
        } else {
            setFeedbackMessage("Invalid HEX color. Please enter a valid value, e.g., #RRGGBB.");
            setFeedbackButtonLabel("Try Again");
            setIsFeedbackModalOpen(true);
        }
    };

    return (
        <div className="mb-4">
            <label className="block font-medium mb-2">{label}</label>
            <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-4 gap-4 xl:gap-0">
                <input
                    type="text"
                    value={color}
                    onChange={handleInputChange}
                    placeholder="#RRGGBB"
                    className="p-2 border border-gray-300 rounded-md w-full xl:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex w-full items-center gap-4">
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full xl:w-auto"
                    >
                        OK
                    </button>
                    <input
                        type="color"
                        value={/^#([A-Fa-f0-9]{6})$/.test(color) ? color : value}
                        onChange={handleColorPickerChange}
                        className="w-full xl:w-1/3 h-10 rounded-md focus:outline-none"
                    />
                </div>
                <FeedBackModal
                    isOpen={isFeedbackModalOpen}
                    message={feedbackMessage}
                    buttonLabel={feedbackButtonLabel}
                    onClose={() => setIsFeedbackModalOpen(false)}
                />
            </div>
        </div>
    );
};