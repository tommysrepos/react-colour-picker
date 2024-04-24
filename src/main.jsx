import React from 'react'
import ReactDOM from 'react-dom/client'
import ColourPicker from './ColourPicker.jsx'
import Counter from './Counter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColourPicker />
    <Counter />
  </React.StrictMode>,
)
