import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavigationMenu } from '@base-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationMenu></NavigationMenu>
  </StrictMode>,
)
