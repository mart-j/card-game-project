import React, { FC, useEffect, useRef } from 'react';
import styles from './Times.module.scss';

interface Props {
  captureScore: string | undefined;
  difficulty: number;
}

const BestTime: FC<Props> = ({ difficulty, captureScore }) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      checkBest();
    }
  }, [captureScore]);

  const checkBest = () => {
    const condition =
      localStorage.getItem('captureScore')! <
        localStorage.getItem('bestScore')! ||
      localStorage.getItem('bestScore') === null;

    if (condition) {
      if (difficulty === 16) {
        localStorage.setItem(
          'bestScore',
          localStorage.getItem('captureScore')!,
        );
      } else if (difficulty === 36) {
        localStorage.setItem(
          'bestScoreMedium',
          localStorage.getItem('captureScore')!,
        );
      } else if ((difficulty === 4)) {
        localStorage.setItem(
          'bestScoreHard',
          localStorage.getItem('captureScore')!,
        );
      }
    }
  };

  return (
    <div className={styles.timeWrapper}>
      <div>Latest Score: {localStorage.getItem('captureScore')}</div>
      <div>Best Scores</div>
      <div>Easy: {localStorage.getItem('bestScore')!}</div>
      <div>Medium: {localStorage.getItem('bestScoreMedium')!}</div>
      <div>Hard: {localStorage.getItem('bestScoreHard')!}</div>
    </div>
  );
};

export default BestTime;
