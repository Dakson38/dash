import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import SedalpApp from './App'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  //*<React.StrictMode>//
    <HashRouter>
      <SedalpApp />
    </HashRouter>
  //</React.StrictMode>,
)
