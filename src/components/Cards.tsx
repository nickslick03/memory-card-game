import { useEffect } from "react";
import { pause } from "../pause";
import { randomArray } from "../randomArray";
import './index.css';

const characters = [
    'Dipper Pines',
    'Mabel Pines',
    'Grunkle Stan',
    'Soos',
    'Wendy',
    'Grunkle Ford',
    'Bill Cipher',
    'Fiddleford McGucket',
    'Pacifica Northwest',
    'Lil\' Gideon',
    'Robbie',
    'Waddles',
];

type CardProps = {
    name: string,
    index: number,
    addIndex: Function,
};

type CardsProps = {
    addIndex: Function,
}

const Card = ({ name, index, addIndex }: CardProps) => {
    return (
        <div 
        className='w-60 h-80 text-center bg-green-500 rounded-xl hover:scale-105 transition-all' 
        onClick={() => addIndex(index)}>
            {name}
        </div>
    );
};

export const Cards = ({ addIndex }: CardsProps) => {
    const JSXArray = characters.map((name, index) => <Card key={index} index={index} name={name} addIndex={addIndex}/>);
    return <>{randomArray(JSXArray)}</>;
};