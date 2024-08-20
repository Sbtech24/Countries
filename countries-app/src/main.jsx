import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './components/SearchContext.jsx'
import { ThemeContextProvider } from './components/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
  </SearchContextProvider>,
)
