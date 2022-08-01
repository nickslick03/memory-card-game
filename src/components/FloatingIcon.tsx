import { useState } from 'react';
import './index.css';

type FloatingIconProps = {
    isCorrect: boolean,
    pageX: number,
    pageY: number,
}

export const FloatingIcon = ({ isCorrect, pageX, pageY }: FloatingIconProps) => {
    return (
        <div className='absolute animate-float opacity-0 select-none z-10 pointer-events-none' style={{ left: pageX, top: pageY }}>
            <div className='scale-150 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                {isCorrect ? '✅' : '❌'}
            </div>
        </div>
    )
}
     