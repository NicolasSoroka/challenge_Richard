import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col w-full container mx-auto p-4'>
      <Navbar/>
      <Transactions/>
    </div>
  </StrictMode>,
)

