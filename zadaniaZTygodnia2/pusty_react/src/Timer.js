import React, { useState } from 'react';
import './App.css';



const Timer = () => {
    let sec = 0;
    const [time, setTime] = useState(0);
    setInterval(() => {
        return setTime(sec + 1);
    }, 1000)

    return (
    <h2>{time}</h2>
    )
}

export default Timer;