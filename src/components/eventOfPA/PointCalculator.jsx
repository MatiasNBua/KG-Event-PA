import React, { useState, useEffect } from 'react';

export default function PointCalculator({ setTotalPointsRegister }) {
    const potions = [10, 20, 50, 100, 200];
    const [quantities, setQuantities] = useState(Array(potions.length).fill(0));

    const handleQuantityChange = (index, value) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = parseInt(value);
        setQuantities(updatedQuantities);
    };

    const totalPoints = quantities.reduce((total, quantity, index) => {
        return total + quantity * potions[index];
    }, 0);

    useEffect(() => {
        setTotalPointsRegister(totalPoints);
    }, [totalPoints]);

    return (
        <div className="w-full h-full flex flex-col align-center bg-slate-400 border border-emerald-600">
            <h1 className="text-2xl font-bold mb-4 text-center py-6">Point Calculator 3</h1>

            <div className="flex flex-row justify-center gap-2 px-2">
                <div className="flex justify-around">
                    <ul className="flex flex-col gap-2 justify-around">
                        {potions.map((potion, index) => (
                            <li className="text-xs" key={index}>
                                Potion: {potion} PA
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    {potions.map((potion, index) => (
                        <input
                            key={index}
                            type="number"
                            className="textxsm bg-slate-300 rounded-3xl text-center focus:outline-none"
                            placeholder="Insert quantity"
                            value={quantities[index]}
                            onChange={(e) => handleQuantityChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {quantities.map((quantity, index) => (
                        <label key={index} className="textxsm">
                            = {quantity * potions[index]} 
                        </label>
                    ))}
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-xl  font-semibold p-4">Total Points: {totalPoints} PA.</p>
            </div>
        </div>
    );
}
