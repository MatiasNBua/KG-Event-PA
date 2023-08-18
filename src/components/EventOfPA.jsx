import React, { useState } from 'react';

import PointCalculator from './eventOfPA/PointCalculator'
import KillMonsterCalculate from './eventOfPA/KillMonsterCalculate'
import TotalPointsOfEvent from './eventOfPA/TotalPointsOfEvent';
import SendMessageWithPoints from './eventOfPA/SendMessageWithPoints'

export default function eventOfPA() {

    const [totalPointsRegister, setTotalPointsRegister] = useState('')
    const [totalMonsterKilled, setTotalMonsterKilled] = useState([]);
    const [pointsForSendMessage, setPointsForSendMessage] = useState('')

    const updateMonsterKilled = (results) => {
        setTotalMonsterKilled(results);
    };

    return (
        <div className="">
            <PointCalculator setTotalPointsRegister={setTotalPointsRegister} />
            <KillMonsterCalculate totalPointsRegister={totalPointsRegister} updateResults={updateMonsterKilled} />
            <TotalPointsOfEvent totalMonsterKilled={totalMonsterKilled} setPointsForSendMessage={setPointsForSendMessage} />
            <SendMessageWithPoints pointsForSendMessage={pointsForSendMessage} />
        </div>
    )
}