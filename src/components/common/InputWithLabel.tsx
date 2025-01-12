import React from 'react';

type InputWithLabelProps = {
    label: string;
    type: "text" | "color";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string; // Optionsl
}

const InputWithLabel = (props: InputWithLabelProps) => {

    const { label, type, value, onChange, className } = props;

    return (
        <div className='mb-4'>
            <label className="block font-medium mb-1">{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded-md ${className}`}
            />
        </div>
    )
}

export default InputWithLabel