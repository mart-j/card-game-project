import React, { FC, useEffect, useState } from 'react';
import styles from './Times.module.scss';

interface Props {
  captureScore: string | undefined;
}

const BestTime: FC<Props> = ({ captureScore }) => {
  const [bestScore, setBestScore] = useState('00:00');

  useEffect(() => {
    checkBest();
  }, [captureScore]);

  const checkBest = () => {
    if (
      Date.parse(`01/01/2011 10:${captureScore}`) <
      Date.parse(`01/01/2011 10:${bestScore}`)
    ) {
      setBestScore(`${captureScore}`);
    }
  };

  return (
    <div className={styles.timeWrapper}>
      <div>LastTime: {captureScore}</div>
      <div>BestTime: {bestScore}</div>
    </div>
  );
};

export default BestTime;
