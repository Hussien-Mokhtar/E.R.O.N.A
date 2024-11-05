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
        <div className=" w-full items-center justify-center lg:px-10  ">
            <h1 className="lg:text-[18px] text-[12px]  gap-2 grid lg:grid-cols-4 grid-cols-4 ">
            <div className="bg-white text-center font-bold px-4 ">{timeLeft.days} <br /> <span className='text-red-600'>DAY</span> </div>  <div className="bg-white text-center font-bold px-4 ">{timeLeft.hours}<br />  <span className='text-red-600'>HRS</span> </div>  <div className="bg-white text-center font-bold px-4  ">{timeLeft.minutes}<br /> <span className='text-red-600'>MIN</span> </div> <div className="bg-white text-center font-bold px-4  ">{timeLeft.seconds}<br /> <span className='text-red-600'>SEC</span></div>
            </h1>
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                <h2 className="text-2xl mt-4">Time is end!</h2>
            )}
        </div>
    );
}
function CounterHome5() {
    const targetDate = new Date(Date.now() + 12 * 24 * 60 * 600 * 1000 + 5 * 60 * 60 * 1000); 
    return <CountdownTimer targetDate={targetDate} />;
}

export default CounterHome5;
