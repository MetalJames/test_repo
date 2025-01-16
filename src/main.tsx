import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EditorProvider } from './state/EditorContext/Provider.tsx'
import { ErrorBoundary } from './components/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <EditorProvider>
              <App />
      </EditorProvider>
    </ErrorBoundary>
  </StrictMode>,
);