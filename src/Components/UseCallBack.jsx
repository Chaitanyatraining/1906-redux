import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    // Memoizing the function to prevent unnecessary re-creation
    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []); // Empty dependency array ensures it only gets created once

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseCallBack