import "./digitalClock.css"
import {useState, useEffect} from 'react';
function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, [])
    function formatTime() {
       let hours = time.getHours();
       const minutes = time.getMinutes();
       const seconds = time.getSeconds();
       const meridiem = hours >= 12 ? 'PM' : 'AM';
    
       hours = hours % 12 || 12
   
       return`${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}:${meridiem}`
}
function addLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
}

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;