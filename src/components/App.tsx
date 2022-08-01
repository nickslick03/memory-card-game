import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client';
import { Cards } from './Cards';
import { FloatingIcon } from './FloatingIcon';
import './index.css';

export const App = () => {
  const [ indexList, setIndexList ] = useState<number[]>([]);
  const [ isCorrect, setIsCorrect ] = useState<boolean | null>(null);
  const [ highScore, setHighScore ] = useState(0);
  const currentScore = indexList.length;
  const pageCoords = useRef({pageX: 0, pageY: 0});

  const addIndex = (index: number, { pageX, pageY }: React.MouseEvent) => {
    pageCoords.current = { 
      pageX, 
      pageY,
    };
    if (indexList.includes(index)) {
      setIndexList([]);
      setIsCorrect(false);
    } else { 
      setIndexList(indexList.concat(index));
      setIsCorrect(true);
    }
  };

  useEffect(() => {
    if (highScore < currentScore) setHighScore(currentScore);
  }, [indexList]);
  
  return (
    <>
      {isCorrect !== null 
      ? <FloatingIcon key={currentScore} isCorrect={isCorrect} pageX={pageCoords.current.pageX} pageY={pageCoords.current.pageY} /> 
      : <></>}
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
        <Cards addIndex={addIndex} />
      </main>
    </>
  );
};
