import { useState } from 'react'
import './App.css'
import Board from './tic-tak-toe/board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid'>
      <header className='d-flex justify-content-center align-items-center'>
        <h1 className='text-center fw-bold pb-4 text-primary'>Tic Tac Toe</h1>
      </header>
      <Board />
    </div>

  )
}

export default App
