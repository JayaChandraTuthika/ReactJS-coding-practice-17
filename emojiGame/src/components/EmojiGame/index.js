import {Component} from 'react'
import './index.css'
// import {v4 as uuidv4} from 'uuid'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isCompleted: false,
    score: 0,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({
      clickedEmojisList: [],
      isCompleted: false,
      score: 0,
    })
  }

  onClickAddScore = id => {
    const {clickedEmojisList, score} = this.state

    const isAlreadySelected = clickedEmojisList.includes(id)

    if (isAlreadySelected === false) {
      if (score === 11) {
        this.setState({
          score: 12,
          isCompleted: true,
          topScore: 12,
        })
      } else {
        this.setState(prev => ({
          score: prev.score + 1,
          clickedEmojisList: [...prev.clickedEmojisList, id],
        }))
      }
    } else {
      this.setState(prev => ({
        isCompleted: true,
        topScore: prev.topScore < score ? score : prev.topScore,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {isCompleted, score, topScore} = this.state

    const shuffledEmojis = emojisList.sort(() => Math.random() - 0.5)

    let element

    if (isCompleted) {
      element = <WinOrLoseCard score={score} resetGame={this.resetGame} />
    } else {
      element = (
        <ul className="emojis-list-container">
          {shuffledEmojis.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              onClickAddScore={this.onClickAddScore}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isCompleted={isCompleted} />
        <div className="second-container">{element}</div>
      </div>
    )
  }
}

export default EmojiGame
