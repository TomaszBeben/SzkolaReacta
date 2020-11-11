import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';



const UUIDGenerator = () => {
    const [uuid, setUuid] = useState(uuidv4);
    const change = () => {
        return setUuid(uuidv4());
    }
    return (
        <div>
            <h2>{uuid}</h2>
            <button onClick={change}>GENERATE</button>
        </div>
    )
}

export default UUIDGenerator;