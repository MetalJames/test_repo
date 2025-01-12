import { CarouselPreview, TextAreaPreview, CallToActionPreview } from "./index"

const MobilePreview = () => {
    return (
        <div className="mobile-preview bg-white shadow-md w-[375px] h-[667px] rounded-lg p-4 overflow-y-auto">
            <CarouselPreview />
            <TextAreaPreview />
            <CallToActionPreview />
        </div>
    );
};

export default MobilePreview;
