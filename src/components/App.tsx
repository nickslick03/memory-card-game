import { useState } from 'react'
import { Cards } from './Cards';
import './index.css';

export const App = () => {
  const [ indexList, setIndexList ] = useState<number[]>([]);
  const [ highScore, setHighScore ] = useState(0);
  const currentScore = indexList.length;

  const addIndex = (index: number) => {
    if (indexList.includes(index)) {
      setIndexList([]);
    } else {
      setIndexList(indexList.concat(index));
      if (highScore === currentScore) setHighScore(highScore + 1);
    }
  };

  return (
    <>
      <header className='text-white p-4 box-border flex justify-between bg-red-800'>
        <div className='text-center'>
          <h1 className='text-2xl'>Gravity Falls</h1>
          —
          <div>Memory Card Game</div>
        </div>
        <div>
          <div>Current Score: {currentScore}</div>
          <div>High Score: {highScore}</div>
        </div>
      </header>
      <main className='p-4 flex flex-wrap justify-center gap-3'>
        <Cards addIndex={addIndex}/>
      </main>
    </>
  );
};
