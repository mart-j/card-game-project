/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/indent */
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';

import styles from './DrawGrid.module.scss';

type Card = {
  odd: boolean;
  index: number;
  image: string;
  opened: boolean;
  revealed: boolean;
};

interface Props {
  difficulty: number;
  grid: Card[];
  setGrid: Dispatch<SetStateAction<Card[]>>;
  revealCard: (i: number) => void;
}

const DrawGrid: FC<Props> = ({ revealCard, setGrid, grid, difficulty }) => {
  const cardImage = 'https://sourcemaking.com/files/v2/content/home-tb1.png';
 
  useEffect(() => {
    
    generateGridSize();
  }, [difficulty]);

  const generateGridSize = () => {
    let newArr: Card[] = [];
    for (let i = 0; i < difficulty; i++) {
      newArr = [
        ...newArr,
        {
          odd: i % 2 === 0 && true,
          index: i,
          image: '',
          opened: false,
          revealed: false,
        },
      ];
    }

    const evenCards = () => {
      return newArr
        .filter((card) => !card.odd)
        .map((card, i) => {
          card.image = `https://robohash.org/${i}?size=100x100`;
          card.index = i;
          return card;
        });
    };
    const oddCards = () => {
      return newArr
        .filter((card) => card.odd)
        .map((card, i) => {
          card.image = `https://robohash.org/${i}?size=100x100`;
          card.index = i;
          return card;
        });
    };

    const shuffeledCards = [...evenCards(), ...oddCards()].sort(
      () => Math.random() - 0.5,
    );

    setGrid(shuffeledCards);
  };

  return (
    <div className={styles.container}>
      {grid.map(({ opened, image }, i) => {
        return (
          <>
            <div
              className={
                difficulty === 16
                  ? styles.easy
                  : difficulty === 36
                  ? styles.medium
                  : styles.hard
              }
              onClick={() => revealCard(i)}
            >
              <div className={styles.inside}>
                <img src={`${opened ? image : cardImage}`} alt="robot" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DrawGrid;
