import react, { useState } from 'react'
import Context_parent from './context_parent'
import counterContext from './counterContext'
export default function Context_main() {
    let val=useState(50)
    return (
        <counterContext.Provider value={val[0]}>
        <Context_parent update={()=>val[1](++val[0])} />
        
        </counterContext.Provider>
    )
}