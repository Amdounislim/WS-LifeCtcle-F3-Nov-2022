import React, { useState, useEffect } from 'react'
import "./App.css"

const App2 = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const [arr, setArr] = useState([1, 2, 3])
    
    useEffect(() =>{
        console.log("Effect")
    },[show, count])


    return (
        <div className='App'>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show ? (<div>
                <button onClick={() => setCount(count + 1)} >+</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>): null}
        </div>
    )
}

export default App2