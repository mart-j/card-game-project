import React, { FC, useEffect, useRef } from 'react';
import styles from './Times.module.scss';

interface Props {
  captureScore: string | undefined;
  difficulty: number
}

const BestTime: FC<Props> = ({difficulty, captureScore }) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      checkBest();
    }
  }, [captureScore]);

  const checkBest = () => {
    if (
      (localStorage.getItem('captureScore')! <
        localStorage.getItem('bestScore')! ||
        localStorage.getItem('bestScore') === null) &&
      difficulty === 16
    ) {
      localStorage.setItem('bestScore', localStorage.getItem('captureScore')!);
    }
  };

  return (
    <div className={styles.timeWrapper}>
      <div>Latest Score: {localStorage.getItem('captureScore')}</div>
      <div>Best Score: {localStorage.getItem('bestScore')!}</div>
    </div>
  );
};

export default BestTime;
