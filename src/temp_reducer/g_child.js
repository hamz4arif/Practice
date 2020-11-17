import react, { useReducer } from 'react'
import counterReducer from './counterReducer'
export default function G_child(){
    let [valg,setvalg]=useReducer(counterReducer,50)
    return (
        <>
    <h1>Grand {valg}</h1>
    <button onClick={()=>setvalg('decrement')}>Decrement</button>
    </>
    )
}