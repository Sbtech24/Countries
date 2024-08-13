import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './components/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>,
)
