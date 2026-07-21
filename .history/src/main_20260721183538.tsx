import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavigationMenuBackdrop } from '@base-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationMenuBackdrop />
  </StrictMode>,
)
