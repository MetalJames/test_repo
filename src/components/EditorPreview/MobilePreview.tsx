import { CarouselPreview, TextAreaPreview, CallToActionPreview } from "../index"

export const MobilePreview = () => {
    return (
        <div className="w-3/4 bg-gray-200 flex justify-center items-center">            
            <div className="mobile-preview bg-white shadow-md w-[375px] h-[667px] rounded-lg p-4 overflow-y-auto">
                <CarouselPreview />
                <TextAreaPreview />
                <CallToActionPreview />
            </div>
        </div>
    );
};