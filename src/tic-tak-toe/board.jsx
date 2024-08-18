import React, { useState } from 'react'
import Square from './square'
import { set } from 'mongoose';
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [chance, setChance] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleSquareClick = (i) => {
        if (squares[i]) return;
        const newSquares = squares.slice();

        newSquares[i] = chance ? 'X' : 'O';

        setSquares(newSquares);

        setChance(!chance);

        if (calculateWinner(newSquares)) {
            console.log('Game Over');
            console.log(calculateWinner(newSquares));
            setWinner(calculateWinner(newSquares));
        }
        // console.log(i)
    }
    console.log(squares)
    if (winner != null) {
        return (
            <div>
                <h1>Winner is {winner}</h1>
                <button className='mt-4' onClick={() => {
                    setSquares(Array(9).fill(null));
                    setWinner(null);
                    
                }}>Play Again</button>
            </div>
        )
    }
    return (
        <div className="board-container container-fluid">
            <div className="board-row container-fluid d-flex">
                <Square onClick={() => handleSquareClick(0)} value={squares[0]} />
                <Square onClick={() => handleSquareClick(1)} value={squares[1]} />
                <Square onClick={() => handleSquareClick(2)} value={squares[2]} />
            </div>
            <div className="board-row container-fluid d-flex">
                <Square onClick={() => handleSquareClick(3)} value={squares[3]} />
                <Square onClick={() => handleSquareClick(4)} value={squares[4]} />
                <Square onClick={() => handleSquareClick(5)} value={squares[5]} />
            </div>
            <div className="board-row container-fluid d-flex">
                <Square onClick={() => handleSquareClick(6)} value={squares[6]} />
                <Square onClick={() => handleSquareClick(7)} value={squares[7]} />
                <Square onClick={() => handleSquareClick(8)} value={squares[8]} />
            </div>
        </div>
    )
}

export default board
