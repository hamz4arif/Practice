import react, { useContext } from 'react'
import counterContext from './hcounterContext'
export default function Hchild(){
   let counterValue=useContext(counterContext)
    return(
    <h1>Hello {counterValue}</h1>
    )
}