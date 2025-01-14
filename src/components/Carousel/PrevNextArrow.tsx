import { CustomArrowProps } from 'react-slick';

const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={`slick-prev ${className}`}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.6)",
                color: "black",
                zIndex: 2,
            }}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <span className="sr-only">Previous</span>
            &#9664;
        </button>
    );
};

const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={`slick-next ${className}`}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.6)",
                color: "black",
                zIndex: 2,
            }}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <span className="sr-only">Next</span>
            &#9654;
        </button>
    );
};

export { PrevArrow, NextArrow };