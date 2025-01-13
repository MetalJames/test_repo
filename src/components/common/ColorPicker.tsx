import React, { useState, useEffect } from 'react';

type ColorPickerProps = {
    label: string;
    value: string;
    onChange: (newColor: string) => void;
};

const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
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
        return hex; // Return the original value if it's already full
    };

    // Handle manual input for hex color
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setColor(input); // Update local state only
    };

    // Handle native color picker change
    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColor(newColor); // Update local state
        onChange(newColor); // Immediately update the parent state
    };

    // Confirm the color change and update the parent state
    const handleConfirm = () => {
        const normalizedColor = normalizeHex(color);
        // Validate the hex format
        if (/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(normalizedColor)) {
            onChange(normalizedColor); // Pass the confirmed color to the parent
        } else {
            alert("Invalid HEX color. Please enter a valid value, e.g., #RRGGBB.");
        }
    };

    return (
        <div className="mb-4">
            <label className="block font-medium mb-2">{label}</label>
            <div className="flex items-center space-x-2">
                {/* Hex Color Input */}
                <input
                    type="text"
                    value={color}
                    onChange={handleInputChange}
                    placeholder="#RRGGBB"
                    className="p-2 border border-gray-300 rounded-md w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Native Color Picker */}
                <input
                    type="color"
                    value={/^#([A-Fa-f0-9]{6})$/.test(color) ? color : value} // Fallback to black if invalid
                    onChange={handleColorPickerChange}
                    className="w-10 h-10 p-0 border rounded-md"
                />

                {/* OK Button */}
                <button
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default ColorPicker;
