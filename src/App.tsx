import { useState } from "react";
import Square from "./Square";
export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || theWinnerIs(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "cross" : "circle";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = theWinnerIs(squares);
  let nameTheWinner = "";
  if(winner.toString() === "cross") nameTheWinner = "Player X is the Winner!";
  else if(winner.toString() === "circle") nameTheWinner = "Player O is the Winner!";
  else nameTheWinner = (xIsNext ? "X" : "O") + " turn!";
  return (
    <div className="tic-tac-toe">
      <p className="message">{nameTheWinner}</p>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function theWinnerIs(squares: Array<number>) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return 0;
}
