import { CarouselPreview, TextAreaPreview, CallToActionPreview } from "../index"

export const MobilePreview = () => {
    return (
        <div className="w-full lg:w-2/3 xl:w-3/4 bg-gray-200 flex justify-center items-center">
                <div className="bg-white shadow-md w-[320px] sm:w-[375px] md:w-[400px] lg:w-[450px] xl:w-[500px] max-h-screen md:max-h-[90vh] xl:max-h-[900px] h-full rounded-lg p-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <CarouselPreview />
                <TextAreaPreview />
                <CallToActionPreview />
            </div>
        </div>
    );
};