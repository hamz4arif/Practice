import react, { useReducer } from 'react'
import counterReducer from './counterReducer'
import G_child from './g_child'
export default function Temp_child(){
    let [val,setVal]=useReducer(counterReducer,11)
    return(
<>
    <h1>hello {val}</h1>
    <button onClick={()=>setVal('increment')} className="btn btn-primary">increment</button>
    <button onClick={()=>setVal('decrement')} className="btn btn-primary">increment</button>
    <hr/>
    <G_child/>
</>
    )
}