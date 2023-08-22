import EventOfPA from './components/EventOfPA'
import { Toaster } from 'sonner'

import './App.css'

function App() {


  return (
    <>
      <div className="w-full h-full">
        <h1 className='text-center p-2 bg-slate-500 text-white font-medium'>Calculator of Points in the event Desert-artic Casttle</h1>

        <EventOfPA/>

        <Toaster richColors closeButton/>
        
      </div>
    </>
  )
}

export default App
