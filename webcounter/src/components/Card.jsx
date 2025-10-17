import { useState } from 'react'
import { Plus, RotateCcw } from 'lucide-react'
import Counter from './Counter'
import Button from './Button'
import JokeDisplay from './JokeDisplay'

function Card() {
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
    <div className="card">
      <Counter count={count} />
      
      <Button onClick={handleIncrement}>
        <Plus size={30} /> Increment
      </Button>

      <Button onClick={handleReset} isReset>
        <RotateCcw size={30} /> Reset
      </Button>
      
      <JokeDisplay joke={joke} loading={loading} />
    </div>
  )
}

export default Card
