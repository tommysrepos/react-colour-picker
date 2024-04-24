import React from 'react'
import ReactDOM from 'react-dom/client'
import ColourPicker from './ColourPicker.jsx'
import Counter from './Counter.jsx'
import './index.css'
import FavouritePokemon from './FavouritePokemon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColourPicker />
    <Counter />
    <FavouritePokemon />
  </React.StrictMode>,
)
