import React, { FC, useEffect, useState } from 'react';

interface Props {
  time: string | undefined;
  setTime: React.Dispatch<React.SetStateAction<string | undefined>>;
  difficulty: number;
  isGameActive: boolean;
}

const Timer: FC<Props> = ({ isGameActive, difficulty, setTime, time }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const countTime = () => {
    if (seconds < 60) {
      seconds < 60 && setTimeout(() => setSeconds(seconds + 1), 1000);
    } else {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  };

  useEffect(() => {
    if (isGameActive) {
      countTime();
    } else {
      setSeconds(0);
      setMinutes(0);
    }

    setTime(`${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`);
  }, [isGameActive, seconds]);

  return <h3>{time}</h3>;
};

export default Timer;
