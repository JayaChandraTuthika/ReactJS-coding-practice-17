import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props

  const winImageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playAgain = () => {
    resetGame()
  }

  return (
    <div className="result-card">
      <div className="text-container">
        <h1 className="card-text-heading">{`${
          score === 12 ? 'You Won' : 'You Lose'
        }`}</h1>
        <p className="card-text-para">{`${
          score === 12 ? 'Best Score' : 'Score'
        }`}</p>
        <p className="score-text">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={winImageUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
