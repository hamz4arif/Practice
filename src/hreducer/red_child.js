import react, { useReducer } from 'react'
import counterReducer from './counterReducer'
export default function Red_child() {
    let [state, setState] = useReducer(counterReducer, 5);
    return (
        <>
            <h1>hello {state}</h1>
            <button className="btn btn-primary" onClick={()=>setState('increment')}>increment</button>
            </>
    )
} 