import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pizza from './Pizza.jsx'
import IceCream from './IceCream.jsx'
import Count from './Count.jsx'
import Forms from './Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pizza />
    <IceCream />
    <Count />
    <Forms />
  </StrictMode>,
)
