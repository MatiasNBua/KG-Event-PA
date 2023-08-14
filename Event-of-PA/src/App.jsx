
import React, { useState } from 'react';
import PointCalculator from './components/PointCalculator'
import KillMonsterCalculate from './components/KillMonsterCalculate'
import TotalPointsOfEvent from './components/TotalPointsOfEvent';
import './App.css'

function App() {
  const [totalPointsRegister, setTotalPointsRegister] = useState('')
  const quantityOfPaForMonster = [8, 9, 10, 16, 18, 20]  

  return (
    <>
      <div className="w-full h-full">
        <h1 className='text-center p-2 bg-slate-500 text-white font-medium'>Calculator of Points in the event Desert Casttle</h1>

        <PointCalculator setTotalPointsRegister={setTotalPointsRegister}/>
        <KillMonsterCalculate totalPointsRegister={totalPointsRegister} quantityOfPaForMonster={quantityOfPaForMonster}/>
        <TotalPointsOfEvent quantityOfPaForMonster={quantityOfPaForMonster}/>
      </div>
    </>
  )
}

export default App
