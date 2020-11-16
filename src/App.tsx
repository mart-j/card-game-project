import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import DrawGrid from './components/grid/DrawGrid';
import Difficulty from './components/difficulty/Difficulty';
import Timer from './components/timer/Timer';
import BestTime from './components/timer/BestTime';

type Card = {
  odd: boolean;
  index: number;
  image: string;
  opened: boolean;
  revealed: boolean;
};
const App = () => {
  const [difficulty, setDicciculty] = useState(0);
  const [grid, setGrid] = useState<Card[]>([]);
  const [cardIndex, setCardIndex] = useState<number[]>([]);
  const [findRobot, setFindRobot] = useState<number[]>([]);
  const [time, setTime] = useState<string | undefined>();
  const [isGameActive, setIsGameActive] = useState(false);
  const [captureScore, setCaptureScore] = useState<string | undefined>();

  useEffect(() => {
    !isGameActive && onGameReset();
  }, [isGameActive]);

  const onGameReset = () => {
    setFindRobot([]);
    setGrid([]);
    setCardIndex([]);
    setDicciculty(0);
  };

  const revealCard = (i: number) => {
    setIsGameActive(true);
    let newArr = [...findRobot];
    let newCardIndex = [...cardIndex];
    const newGrid = [...grid];
    newGrid[i].opened = true;
    setGrid(newGrid);

    if (!newGrid[i].revealed) {
      if (newArr.length > 0) {
        newArr = [];
        newCardIndex = [];
        setFindRobot([...newArr]);
        setCardIndex([...newCardIndex]);

        newArr = [...findRobot, grid[i].index];
        newCardIndex = [...cardIndex, i];
      } else {
        newArr = [...findRobot, grid[i].index];
        newCardIndex = [...cardIndex, i];
        setFindRobot([...newArr]);
        setCardIndex([...newCardIndex]);
      }
      if (i === cardIndex[0] && !grid[i].revealed) {
        newGrid[i].opened = false;
      } else if (newArr[0] === newArr[1]) {
        newGrid[cardIndex[0]].revealed = true;
        newGrid[i].revealed = true;

        setGrid([...newGrid]);
        setTimeout(() => {
          const all = grid.filter((card) => card.opened === true);
          if (all.length === grid.length) {
            alert('Congratulations You won!');
            localStorage.setItem('captureScore', time!);
            setCaptureScore(time);
            
            setIsGameActive(false);
          } else {
            alert('Pair was found!');
          }
        }, 500);
      } else if (newArr.length === 2) {
        setTimeout(() => {
          newGrid[cardIndex[0]].opened = false;
          newGrid[i].opened = false;
          setGrid([...newGrid]);
        }, 1000);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Timer
        time={time}
        setTime={setTime}
        isGameActive={isGameActive}
        difficulty={difficulty}
      />
      <BestTime captureScore={captureScore} />
      <Difficulty
        setIsGameActive={setIsGameActive}
        difficulty={difficulty}
        setDicciculty={setDicciculty}
      />
      <DrawGrid
        revealCard={revealCard}
        grid={grid}
        setGrid={setGrid}
        difficulty={difficulty}
      />
    </div>
  );
};
export default App;
