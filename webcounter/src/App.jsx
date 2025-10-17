import { useState } from 'react'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WebCounter</h1>
      <div className="card">
        <div className="counter-label">
          <span>Counter: </span><span className={count === 0 ? 'counter-zero' : 'counter-number'}>{count}</span>
        </div>
        <button className="basic-button" onClick={() => setCount(count + 1)}>
          <Plus size={30} /> Increment
        </button>
        <button className="basic-button reset-button" onClick={() => setCount(0)}>
          <RotateCcw size={30} /> Reset
        </button>
      </div>
    </>
  )
}

export default App