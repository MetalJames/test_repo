import React from 'react';

type Props = {
    label: string;
    type: "text" | "color";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
}

export const InputWithLabel = (props: Props) => {

    const { label, type, value, onChange, className, placeholder } = props;

    return (
        <div className='mb-4'>
            <label className="block font-medium mb-1">{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded-md ${className}`}
                placeholder={placeholder}
            />
        </div>
    )
}