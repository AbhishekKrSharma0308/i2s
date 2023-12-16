import React, { useState, useEffect } from 'react';


const NumberCounters = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const maxCount = 250; // Change this to your desired maximum number
  const maxCount1 = 5;
  const maxCount2 = 250;
  const maxCount3 = 200;
  useEffect(() => {
    const timer1 = setInterval(() => {
      if (counter1 < maxCount) {
        setCounter1(counter1 + 1);
      }
    }, 80);

    const timer2 = setInterval(() => {
      if (counter2 < maxCount1) {
        setCounter2(counter2 + 1);
      }
    }, 80);

    const timer3 = setInterval(() => {
      if (counter3 < maxCount2) {
        setCounter3(counter3 + 1);
      }
    }, 80);

    const timer4 = setInterval(() => {
      if (counter4 < maxCount3) {
        setCounter4(counter4 + 1);
      }
    }, 80);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, [counter1, counter2, counter3, counter4, maxCount]);

  return (
    <div className="counters-container">
      <div className="counter"><h5>{counter1}+</h5>
      <h4>Happy clients</h4></div>
      <div className="counter"><h5>{counter2}+</h5> <h4>Years Of Experience</h4></div>
      <div className="counter"><h5>{counter3}+</h5> <h4>Projects Delivered</h4></div>
      <div className="counter"><h5>{counter4}+</h5> <h4>Team Strength</h4></div>
    </div>
  );
};

export default NumberCounters;
