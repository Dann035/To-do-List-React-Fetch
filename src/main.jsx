import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appcopy from '../appcopy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcopy/>
  </StrictMode>,
)
