import React, { Dispatch, FC, SetStateAction } from 'react';
import { DifficultyButtons } from './DifficultyButtons';
import styles from './Difficulty.module.scss';

interface Props {
  setDicciculty: React.Dispatch<React.SetStateAction<number>>;
  difficulty: number;
  setIsGameActive: Dispatch<SetStateAction<boolean>>;
}
// @ts-ignore
const Difficulty: FC<Props> = ({
  setIsGameActive,
  difficulty,
  setDicciculty,
}) => {
  const difficultyButtonHandler = (index: number) => {
    if (index === 0) {
      setDicciculty(16);
    } else if (index === 1) {
      setDicciculty(36);
    } else if (index === 2) {
      setDicciculty(100);
    }
  };

  const resetDifficulty = () => {
    setDicciculty(0);
    setIsGameActive(false);
  };

  return (
    <div className={styles.buttonWrapper}>
      {difficulty === 0 ? (
        DifficultyButtons.map((button, i) => {
          return (
            <button
              className={styles.button}
              onClick={() => difficultyButtonHandler(i)}
              key={i.toString()}
            >
              {button}
            </button>
          );
        })
      ) : (
        <button onClick={resetDifficulty}>Restart Game</button>
      )}
    </div>
  );
};

export default Difficulty;
