// Frontend Interview Practice Questions (CARS24 & Birdeye)

// 1. Predict the Output
console.log(1 + '1'); // 11
console.log(1 - '1'); // 0
console.log([1] + {}); // []
console.log({} + [2]); //{}

// 2. Implement a Debounce Function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage Example
const log = debounce(() => console.log('Debounced!'), 1000);
log();

// 3. Implement a Throttle Function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// 4. Build a Tic-Tac-Toe Game in React (Basic Setup)
// Assume React is imported
// function TicTacToe() {
//   const [board, setBoard] = React.useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = React.useState(true);

//   function handleClick(index) {
//     if (board[index]) return;
//     const newBoard = board.slice();
//     newBoard[index] = isXNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setIsXNext(!isXNext);
//   }

//   return (
//     <div>
//       <div>{board.map((cell, idx) => (
//         <button key={idx} onClick={() => handleClick(idx)}>{cell}</button>
//       ))}</div>
//     </div>
//   );
// }

// 5. Explain React's Reconciliation Process
// Research and explain how React updates the Virtual DOM efficiently.
