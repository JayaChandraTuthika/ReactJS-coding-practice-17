import './index.css'

const NavBar = props => {
  const {isCompleted, score, topScore} = props

  let element

  if (isCompleted) {
    element = null
  } else {
    element = (
      <div className="navbar-score-container">
        <p className="navbar-score-text">Score: {score}</p>
        <p className="navbar-score-text">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="navbar-logo"
      />
      <h1 className="navbar-logo-text">Emoji Game</h1>
      {element}
    </nav>
  )
}

export default NavBar
