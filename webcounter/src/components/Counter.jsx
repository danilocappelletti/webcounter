function Counter({ count }) {
  return (
    <div className="counter-label">
      <span>Counter: </span>
      <span className={count === 0 ? 'counter-zero' : 'counter-number'}>
        {count}
      </span>
    </div>
  )
}

export default Counter
