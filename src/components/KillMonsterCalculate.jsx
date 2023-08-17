import React,{ useEffect, useState } from "react";

export default function KillMonsterCalculate ({ totalPointsRegister, updateResults  }) {
    const quantityOfPaForMonster = [8, 9, 10, 16, 18, 20]  



    const typeOfHero = ['Hero with 20% REDUCE of ', 'Hero with 10% REDUCE of ', 'Normal', 'Hero with 10% REDUCE of', 'Hero with 20% REDUCE of', 'Normal'];
    const [results, setResults] = useState([])

    useEffect(() => {
        const calculateResults = (quantityOfPaForMonster.map(element => Math.floor(totalPointsRegister / element)))

        setResults(calculateResults)   
        updateResults(calculateResults);

    },[totalPointsRegister]) 
    

    return(
        <div className="w-full h-full flex flex-col align-center bg-slate-300 border border-emerald-500">
            <h1 className="text-2xl font-bold mb-4 text-center py-6">Kill Monster Calculator</h1>
                <h4 className="text-center pb-4">
                    Diffentes Type of Hero`ss:
                </h4>
            <div className="flex flex-row justify-center gap-4 pr-4 pb-6 pl-4">
                <div className="P-4">
                    <ul className="flex flex-col gap-2 justify-around h-full">
                        {typeOfHero.map((position, index) => (
                            <li className="text-xs border border-black p-2 rounded-xl" key={index}>
                            <p>
                                {position} PA.
                            </p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="">
                    <ul className="flex flex-col gap-2">
                        {quantityOfPaForMonster.map((position,index) => (
                            <li className="text-xs border border-black p-2 rounded-xl" key={index}>
                                <p>For each Monster use: {position} PA </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className="flex flex-col gap-2 justify-around h-full w-16">
                        {results.map((result, index) => (
                        <li className="text-xs" key={index}>
                            = {result}
                        </li>
                        ))

                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}