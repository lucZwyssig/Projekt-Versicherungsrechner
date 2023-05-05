import  { useEffect, useState } from 'react';


function Stopwatch(props) {
  const [isrunning, setisrunning] = useState(false);
  const [time, settime] = useState(0);
  const [interval, setinterval] = useState(null);
  

  useEffect(() => {
    if (isrunning) {
      setinterval(setInterval(() => {
        settime((time) => time + 10);
      }, 10));
      
    } else {
      clearInterval(interval);
      props.setendtime(time);
    }
  }, [isrunning]);

  
 
  useState(() => {
    
    setisrunning(!isrunning);
    props.setendtime(time);
    
    
  }, [props.playover]);
  

  

  return (
    <div>
      {time}
      
    </div>
  );
}

export default Stopwatch;