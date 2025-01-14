import React, { useState, useEffect } from 'react';

type ColorPickerProps = {
    label: string;
    value: string;
    onChange: (newColor: string) => void;
};

export const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
    const [color, setColor] = useState(value);

    // Sync local state with external value
    useEffect(() => {
        setColor(value);
    }, [value]);

    // Normalize short hex (#RGB) to full hex (#RRGGBB)
    const normalizeHex = (hex: string) => {
        if (/^#([A-Fa-f0-9]{3})$/.test(hex)) {
            return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
        }
        return hex;
    };

    // Handle manual input for hex color
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setColor(input);
    };

    // Handle native color picker change
    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColor(newColor);
        onChange(newColor);
    };

    // Confirm the color change and update the parent state
    const handleConfirm = () => {
        const normalizedColor = normalizeHex(color);
        // Validate the hex format
        if (/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(normalizedColor)) {
            onChange(normalizedColor);
        } else {
            alert("Invalid HEX color. Please enter a valid value, e.g., #RRGGBB.");
        }
    };

    return (
        <div className="mb-4">
            <label className="block font-medium mb-2">{label}</label>
            <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-4 gap-4">
                {/* Hex Color Input */}
                <input
                    type="text"
                    value={color}
                    onChange={handleInputChange}
                    placeholder="#RRGGBB"
                    className="p-2 border border-gray-300 rounded-md w-full xl:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Native Color Picker */}
                <div className="flex w-full">
                    <input
                        type="color"
                        value={/^#([A-Fa-f0-9]{6})$/.test(color) ? color : value}
                        onChange={handleColorPickerChange}
                        className="w-full xl:w-1/3 h-10 p-0 pr-4 border rounded-md"
                    />
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full xl:w-auto"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};