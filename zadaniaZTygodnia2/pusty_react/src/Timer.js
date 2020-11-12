import React, { useState, useEffect } from 'react';
import './App.css';


let sec = 0;
const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            return setTime(sec += 1);
        }, 1000)
    }, [])

    return (
        <h2>{`${time}s`}</h2>
    )
}

export default Timer;