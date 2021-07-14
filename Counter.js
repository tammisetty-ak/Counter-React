import React,{useState} from "react"
import "./style.css"

const Counter=() =>{
    let [score,setScore]=useState(0);
    return(
        <div>
        <h1 style={{textAlign:"center"}}>Counter</h1>
        <h3>The value of Counter is {score}</h3>
        <button onClick={()=>{if(score<25){setScore(score+1)}}}>Increment</button>
        <button onClick={()=>score>0? setScore(score-1) : window.alert('Counter is Already Zero')}>Decrement</button>
        <button onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}

export default Counter