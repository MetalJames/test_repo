import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EditorProvider } from './state/EditorContext/Provider.tsx'
import { ErrorBoundary } from './components/index.ts'
// import { CarouselProvider } from './state/EditorContext/Carousel/CarouselProvider.tsx'
// import { TextAreaProvider } from './state/EditorContext/TextArea/TextAreaProvider.tsx'
// import { CTAProvider } from './state/EditorContext/CallToAction/CTAProvider.tsx'
// import { GlobalProvider } from "./state/EditorContext/GlobalProvider/GlobalProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <EditorProvider>
      {/* <GlobalProvider> */}
        {/* <CarouselProvider>
          <TextAreaProvider>
            <CTAProvider> */}
              <App />
            {/* </CTAProvider>
          </TextAreaProvider>
        </CarouselProvider> */}
      {/* </GlobalProvider> */}
      </EditorProvider>
    </ErrorBoundary>
  </StrictMode>,
);
