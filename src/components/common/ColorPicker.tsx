import React, { useState } from 'react';

type ColorPickerProps = {
    label: string;
    value: string;
    onChange: (newColor: string) => void;
};

const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
    const [color, setColor] = useState(value); // Internal state for color

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hex = e.target.value;
        // Validate hex format (e.g., #RRGGBB or #RGB)
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})?$/.test(hex)) {
            setColor(hex);
        }
    };

    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value); // Sync with the native color picker
    };

    const handleConfirm = () => {
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
            onChange(color); // Pass confirmed color to parent
        } else {
            alert("Invalid HEX color. Please enter a valid value, e.g., #RRGGBB.");
        }
    };

    return (
        <div className="mb-4">
            <label className="block font-medium mb-1">{label}</label>
            <div className="flex items-center space-x-2">
                {/* HEX Input */}
                <input
                    type="text"
                    value={color}
                    onChange={handleInputChange}
                    placeholder="#RRGGBB"
                    className="p-2 border rounded-md w-32"
                />
                {/* Native Color Picker */}
                <input
                    type="color"
                    value={color}
                    onChange={handleColorPickerChange}
                    className="w-10 h-10 p-0 border rounded-md"
                />
                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default ColorPicker;
