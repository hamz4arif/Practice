import react, { useContext } from 'react'
import counterContext from './counterContext'
export default function Context_child(){
    let counterValue=useContext(counterContext)
    return(
    <h1>Hello {counterValue}</h1>
    )
}