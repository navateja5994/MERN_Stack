import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import Pizza from './Pizza.jsx'
import IceCream from './IceCream.jsx'
import Count from './Count.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
import Light from './Lights.jsx'
import API from './API.jsx'*/
import DB from './DB_connect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DB/>
  </StrictMode>,
)
