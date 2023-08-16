import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { hex_rgb_is_light } from './Input'

console.log(hex_rgb_is_light.toString())
console.log('More about on github.com/vegadelalyra/color-bright-hex-rgb-react')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)