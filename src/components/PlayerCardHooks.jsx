import React, { useState,useEffect } from 'react'

export default function PlayerCardHooks() {
    const vleraFillestare = 0
    
    const [points,setPoints] = useState(vleraFillestare)

    const [users,setUsers]=useState([])

    console.log(`🚀 -> users`, users)

    function changePoints() {
        setPoints(33)
    }


    return (
        <div>
            PlayerCardHooks
            <button onClick={()=>setPoints(points+1)}>Update</button>
            <button onClick={()=>setUsers([{name:"John",age:22}])}>Add users</button>
        </div>
    )
}
