import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import QuizApp from './Quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz" element={<QuizApp />} />
    </Routes>
  
  </BrowserRouter>
  </StrictMode>
)
