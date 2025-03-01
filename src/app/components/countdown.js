"use client"
import styles from './countdown.module.css';
import { useState, useEffect } from 'react';



const CountdownTimer = () => {
  
    

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds, setSeconds]= useState(0)

  useEffect(() => {
    const targetDate = new Date('2025-08-09T00:00:00'); // Replace with your target date
  
    const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate.getTime()-now.getTime();

    const d = Math.floor(difference/(1000*60*60*24));
    setDays(d);

    const h = Math.floor((difference % (1000*60*60*24)/(1000*60*60))
);
    setHours(h);
    

    const m = Math.floor((difference % (1000*60*60))/(1000*60));
    setMinutes(m);

    const s = Math.floor((difference % (1000*60))/1000);
    setSeconds(s);

}, [1000]);
    return () => clearinterval(interval);
  }, []);

  return (
    <div className={styles.countdowntimer}>
        
      
      <ol className={styles.timer}>
       <li> <h3 className= {styles.timertitle}>Countdown to the Big Day</h3></li>
          <li className= {styles.timerdays}>{days}</li>
          <p className= {styles.timertitledays}>Days</p>
        
          <li className= {styles.timerhours}>{hours}</li>
          <p className= {styles.timertitlehours}>Hours</p>
        
    
          <li className= {styles.timerminutes}>{minutes}</li>
          <p className= {styles.timertitleminutes}>Minutes</p>
       
          <li className= {styles.timerseconds}>{seconds}</li>
          <p className={styles.timertitleseconds}>Seconds</p>
        </ol>
         </div>
    
  );
};

export default CountdownTimer;
