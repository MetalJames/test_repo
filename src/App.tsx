import { CarouselEditor, TextAreaEditor, CallToActionEditor, MobilePreview } from "./components";

function App() {

  return (
    <div className="flex h-screen">

      {/* Editor Panel (Left)*/}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Editor Panel</h1>
        <CarouselEditor />
        <TextAreaEditor />
        <CallToActionEditor />
      </div>

      {/* Preview Panel (Right) */}
      <div className="w-3/4 bg-gray-200 flex justify-center items-center">
        {/* Mobile Preview */}
        <MobilePreview />
      </div>
    </div>
  );
}

export default App
