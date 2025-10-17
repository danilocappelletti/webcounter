function JokeDisplay({ joke, loading }) {
  return (
    <div className="joke-container">
      {loading ? (
        <p className="joke-text loading">Loading joke...</p>
      ) : joke ? (
        <p className="joke-text">{joke}</p>
      ) : (
        <p className="joke-text placeholder">
          Click Increment to get a Chuck Norris joke!
        </p>
      )}
    </div>
  )
}

export default JokeDisplay
