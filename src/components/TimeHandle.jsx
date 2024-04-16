import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [timerID, setTimerID] = useState(null);

    useEffect(() => {
        const id = startTimer();
        return () => clearInterval(id);
    }, []);

    const startTimer = () => {
        const id = setInterval(() => tick(), 1000);
        setTimerID(id);
        return id;
    };

    const stopTimer = () => {
        clearInterval(timerID);
    };

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    };

    const handleStart = () => {
        if (!timerID) {
            const id = startTimer();
            setTimerID(id);
        }
    };

    const handleStop = () => {
        if (timerID) {
            stopTimer();
            setTimerID(null);
        }
    };

    return (
        <div className='main-container'>
            <div className="card">
                <div className="card-content">
                    <div class="face">
                        <p class="v-index">II
                        </p>
                        <p class="h-index">II
                        </p>
                        <div class="hand">
                            <div class="hand">
                                <div class="hour"></div>
                                <div class="minute"></div>
                                <div class="second"></div>
                            </div>
                        </div>
                    </div>
                    <p className="current-time">Current time:</p>
                    <p className="time">{time}</p>
                    <button onClick={handleStart}>START</button>
                    <button onClick={handleStop}>STOP</button>
                </div>
            </div>
        </div>
    );
};

export default Clock;
