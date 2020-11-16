import react, { useState } from 'react'
export default function App2() {
    let [count, setCount] = useState(0);
    let [day,setDay]=useState(true);
    let increment=()=>setCount(++count)
    let decrement=()=>setCount(--count)
    return (
        <div className={`main ${day ? "day":"night"}`}>
            <h1>Good {day?"Morning":"Night"}</h1>
            <h1 className="h1">Value of counts is:{count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <br/>
            <button onClick={()=>setDay(!day)}>DayChange</button>
            </div>
    )
}