import { useState } from 'react'
import { Plus, RotateCcw } from 'lucide-react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const data = await response.json()
      setJoke(data.value)
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke('Failed to load joke. Try again!')
    } finally {
      setLoading(false)
    }
  }

  const handleIncrement = () => {
    setCount(count + 1)
    fetchJoke()
  }

  const handleReset = () => {
    setCount(0)
    setJoke('')
    setLoading(false)
  }

  return (
    <>
      <h1>WebCounter</h1>
      <div className="card">
        <div className="counter-label">
          <span>Counter: </span><span className={count === 0 ? 'counter-zero' : 'counter-number'}>{count}</span>
        </div>
        <button className="basic-button" onClick={handleIncrement}>
          <Plus size={30} /> Increment
        </button>
        <button className="basic-button reset-button" onClick={handleReset}>
          <RotateCcw size={30} /> Reset
        </button>
        <div className="joke-container">
          {loading ? (
            <p className="joke-text loading">Loading joke...</p>
          ) : joke ? (
            <p className="joke-text">{joke}</p>
          ) : (
            <p className="joke-text placeholder">Click Increment to get a Chuck Norris joke!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App