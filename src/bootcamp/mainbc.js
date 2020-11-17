import react, { useState } from 'react'
import counterContext from './hcounterContext'
import Hparent from './hparent'
export default function Bcmain() {
    let countstate=useState(0)
    return (
        <counterContext.Provider value={countstate[0]}>
        <Hparent />
        <button onClick={()=>{countstate[1](++countstate[0])}}>Increment</button>
        </counterContext.Provider>
    )
}