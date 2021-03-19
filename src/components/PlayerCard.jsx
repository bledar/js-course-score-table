import React, { useState } from 'react'

let user  = {
    firstName: "John",
    lastName: "Doe"
}

export default function PlayerCard ({player,deleteFun,playerIndex}) {

    const [points, setPoint] = useState(0)

    const [name,handleChange] = useState(player.name)

    const handleIncrement = () => {
        setPoint(points+1)
        user.firstName="User points: "+points
    }

    const handleReset=()=>{
        setPoint(0)
    }

    const handleDecrement=()=>{
        if(points > 0 ){
            setPoint(points-1)
        }
    }

    return (
        <div className="PlayerCard">
            <button onClick={()=>{deleteFun(playerIndex)}}>Delete</button>
            <input onChange={(e)=>handleChange(e.target.value)} type="text" value={name}/>
            <p className="points">{points}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

