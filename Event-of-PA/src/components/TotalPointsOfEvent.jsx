export default function TotalPointsOfEvent({ totalMonsterKilled }) {


    return (

        <div className="w-full h-full flex flex-col align-center bg-slate-400 border border-emerald-400">
            <h1 className="text-2xl font-bold mb-4 text-center py-6">Yours total Points of the Event:</h1>
            <div className="flex flex-row justify-center gap-4 pr-4 pb-6 pl-4">
                <div className="p-4">
                    <ul className="flex flex-col gap-2 justify-around h-full">
                        {totalMonsterKilled.map((mosterKilled,index) => (
                                <li className="text-xs border border-black p-2 rounded-xl" key={index}>
                                    <p>  {index < 3 ? 'Small Mosnter 10 pts' : 'Big Mosnter 20 pts'}: {mosterKilled} PA </p>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="p-4">
                    <ul className="flex flex-col gap-2 justify-around h-full">
                        {totalMonsterKilled.map((elemnto, index) => (
                            
                            <li className="text-xs border border-black p-2 rounded-xl" key={index}>
                            <p><b> TOTAL scores</b>in this case: { index < 3 ? elemnto * 10 : elemnto * 20 } </p>
                            </li>

                                
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}