import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

function Stopwatch() {
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
    }
  }, [isrunning]);

  function start() {
    setisrunning(!isrunning);
    
    
  }

  

  return (
    <div>
      {time}
    </div>
  );
}

export default Stopwatch;