import React from "react";
import { randomArray } from "../randomArray";
import Dipper from '../assets/Dipper.png';
import Mabel from '../assets/Mabel.png';
import GrunkleStan from '../assets/GrunkleStan.png';
import Soos from '../assets/Soos.png';
import Wendy from '../assets/Wendy.png';
import GrunkleFord from '../assets/GrunkleFord.png';
import BillCipher from '../assets/BIllCipher.png';
import FiddlefordMcGucket from '../assets/FiddlefordMcGucket.png';
import PacificaNorthwest from '../assets/PacificaNorthwest.png';
import LilGideon from '../assets/LilGideon.png';
import Robbie from '../assets/Robbie.png';
import Waddles from '../assets/Waddles.png';
import './index.css';

type Character = {
    name: string,
    img: string,
}

const characters: Character[] = [
    {name: 'Dipper', img: Dipper},
    {name: 'Mabel', img: Mabel},
    {name: 'Grunkle Stan', img: GrunkleStan},
    {name: 'Soos', img: Soos},
    {name: 'Wendy', img: Wendy},
    {name: 'Grunkle Ford', img: GrunkleFord},
    {name: 'Bill Cipher', img: BillCipher},
    {name: 'Fiddleford McGucket', img: FiddlefordMcGucket},
    {name: 'Pacifica Northwest', img: PacificaNorthwest},
    {name: 'Lil\' Gideon', img: LilGideon},
    {name: 'Robbie', img: Robbie},
    {name: 'Waddles', img: Waddles},
];

type CardProps = {
    character: Character,
    addIndex: React.MouseEventHandler,
};

type CardsProps = {
    addIndex: Function,
};

const Card = ({ character: { name, img }, addIndex }: CardProps) => {
    return (
        <div 
        className='relative w-60 h-80 rounded-xl shadow-md shadow-slate-400 hover:scale-105 transition-all' onClick={addIndex}>
            <img src={img} alt={name} className='h-full w-auto object-cover rounded-xl'/>
            <div className='absolute bottom-0 text-lg p-1 pr-10 rounded-bl-xl bg-gradient-to-r from-yellow-200 to-transparent'>
                {name}
            </div>
        </div>
    );
};

export const Cards = ({ addIndex }: CardsProps) => {
    const JSXArray = characters.map((character, index) => <Card key={index} character={character} addIndex={(e) => addIndex(index, e)}/>);
    return <> {randomArray(JSXArray)} </>;
};