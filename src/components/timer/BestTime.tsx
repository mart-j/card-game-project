import React, { FC, useEffect, useRef } from 'react';
import styles from './Times.module.scss';

interface Props {
  captureScore: string | undefined;
}

const BestTime: FC<Props> = ({ captureScore }) => {
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
      localStorage.getItem('captureScore')! <
        localStorage.getItem('bestScore')! ||
      localStorage.getItem('bestScore') === null
    ) {
      localStorage.setItem('bestScore', localStorage.getItem('captureScore')!);
     
    }
  };

  return (
    <div className={styles.timeWrapper}>
      <div>LastTime: {localStorage.getItem('captureScore')}</div>
      <div>BestTime: {localStorage.getItem('bestScore')!}</div>
    </div>
  );
};

export default BestTime;
