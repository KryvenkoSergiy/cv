import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted: a Google Fonts stylesheet blocked the first paint on a third-party round trip.
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
