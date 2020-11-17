import react from 'react'
import Context_child from './context_child'
export default function Context_parent(props){
    return(
        <>
        <Context_child/>
        <button onClick={props.update}>increment</button>
        </>
    )
}