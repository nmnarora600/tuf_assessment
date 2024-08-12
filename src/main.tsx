import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <App />
    <Toaster position='top-center'/>
    </ThemeProvider>
  </StrictMode>,
)
