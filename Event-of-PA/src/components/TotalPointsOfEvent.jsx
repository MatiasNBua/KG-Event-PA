export default function TotalPointsOfEvent({ quantityOfPaForMonster }) {
    
   const casesOfPoints = () =>{
    console.log(quantityOfPaForMonster)
   }

    return (

        <div className="w-full h-full flex flex-col align-center bg-slate-400 border border-emerald-400">
            <h1 className="text-2xl font-bold mb-4 text-center py-6">Yours total Points of the Event:</h1>
            <div className="flex flex-row justify-center gap-4 pr-4 pb-6 pl-4">
                <div className="p-4">
                    <ul className="flex flex-col gap-2 justify-around h-full">
                        {quantityOfPaForMonster.map((unitOfPa) => (
                                <li className="text-xs border border-black p-2 rounded-xl">
                                    <p> For each Monster use: {unitOfPa} PA </p>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="p-4">
                    <ul className="flex flex-col gap-2 justify-around h-full">
                        {quantityOfPaForMonster.map((elemnto, index) => (
                                <li className="text-xs border border-black p-2 rounded-xl" key={index}>
                                    <p> The scores in this case are: {casesOfPoints()} </p>
                                </li>
                            ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}