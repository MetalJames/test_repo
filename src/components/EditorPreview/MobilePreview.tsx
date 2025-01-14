import { CarouselPreview, TextAreaPreview, CallToActionPreview } from "../index"

export const MobilePreview = () => {
    return (
        <div className="w-full lg:w-2/3 xl:w-3/4 bg-gray-200 flex justify-center items-center">
            <div className=" bg-white shadow-md w-[320px] sm:w-[375px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[667px] sm:h-[700px] md:h-[750px] lg:h-[800px] xl:h-[900px] rounded-lg p-6 space-y-4 overflow-y-auto">
                <CarouselPreview />
                <TextAreaPreview />
                <CallToActionPreview />
            </div>
        </div>
    );
};