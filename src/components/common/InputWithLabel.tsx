type Props = {
    label: string;
    value: string | number;
    onChange: (value: string | number) => void;
    type?: "text" | "color" | "range";
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    placeholder?: string;
    additionalText?: string;
}

export const InputWithLabel = (props: Props) => {

    const { label, value, onChange, type = "text", min, max, step, className, placeholder, additionalText } = props;

    return (
        <div className={`mb-4 ${className}`}>
            <label className="block font-medium mb-2">{label}</label>
            <input 
                type={type}
                value={value}
                onChange={(e) =>
                    type === 'range'
                        ? onChange(parseInt(e.target.value, 10))
                        : onChange(e.target.value)
                }
                min={min}
                max={max}
                step={step}
                className={`w-full p-2 border rounded-md ${className}`}
                placeholder={placeholder}
            />
            {type === 'range' && additionalText && (
                <p className="text-sm text-gray-500 mt-1">{additionalText}</p>
            )}
        </div>
    )
}