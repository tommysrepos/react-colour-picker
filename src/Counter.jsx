import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
    }

    function decrement(){
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <>
            <div className="counter-container">
                <p>Count: {count}</p>
                <div className="buttons-container">
                    <button onClick={increment}>Increment</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter
