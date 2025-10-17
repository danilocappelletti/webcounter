function Button({ onClick, children, isReset }) {
  return (
    <button className={`basic-button ${isReset ? 'reset-button' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
