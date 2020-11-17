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
      } else if (difficulty === 100) {
        localStorage.setItem(
          'bestScoreHard',
          localStorage.getItem('captureScore')!,
        );
      }
    }
  };

  return (
    <div className={styles.timeWrapper}>
      <div >Latest Score: {localStorage.getItem('captureScore')}</div>
    <div className={styles.bestScoreContainer}>
      
      <div className={styles.difficultyScoreContainer}>
        <div>Easy</div>
        <div>{localStorage.getItem('bestScore')!}</div>
      </div>
      <div className={styles.difficultyScoreContainer}>
        <div>Medium</div>
        <div>{localStorage.getItem('bestScoreMedium')!}</div>
      </div>
      <div className={styles.difficultyScoreContainer}>
        <div>Hard</div>
        <div>{localStorage.getItem('bestScoreHard')!}</div>
      </div>
      </div>


    </div>
  );
};

export default BestTime;
