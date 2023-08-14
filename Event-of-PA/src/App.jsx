
import React, { useState } from 'react';
import PointCalculator from './components/PointCalculator'
import KillMonsterCalculate from './components/KillMonsterCalculate'
import TotalPointsOfEvent from './components/TotalPointsOfEvent';
import SendMessageWithPoints from './components/SendMessageWithPoints'
import { Toaster } from 'sonner'

import './App.css'

function App() {

  const [totalPointsRegister, setTotalPointsRegister] = useState('')
  const [totalMonsterKilled, setTotalMonsterKilled] = useState([]);
  
  const updateMonsterKilled = (results) => {
    setTotalMonsterKilled(results);
};


  return (
    <>
      <div className="w-full h-full">
        <h1 className='text-center p-2 bg-slate-500 text-white font-medium'>Calculator of Points in the event Desert Casttle</h1>

        <PointCalculator setTotalPointsRegister={setTotalPointsRegister}/>
        <KillMonsterCalculate totalPointsRegister={totalPointsRegister}  updateResults={updateMonsterKilled}/>
        <TotalPointsOfEvent  totalMonsterKilled={totalMonsterKilled}/>
        <SendMessageWithPoints/>
        <Toaster richColors closeButton/>
        
      </div>
    </>
  )
}

export default App
