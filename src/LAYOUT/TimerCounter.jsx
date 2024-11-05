import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className=" w-full flex flex-row items-center justify-center lg:px-10  ">
            <h1 className="lg:text-[18px] text-[12px]">
                {timeLeft.days} Days : {timeLeft.hours}  Hours : {timeLeft.minutes} Minute :{timeLeft.seconds} Second
            </h1>
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                <h2 className="text-2xl mt-4">Time is end!</h2>
            )}
        </div>
    );
}
function TimerCounter() {
    const targetDate = new Date(Date.now() + 12 * 24 * 60 * 600 * 1000 + 5 * 60 * 60 * 1000); 
    return <CountdownTimer targetDate={targetDate} />;
}

export default TimerCounter;
