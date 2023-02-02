import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickAddScore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const addEmoji = () => {
    onClickAddScore(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-card-btn" type="button" onClick={addEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-card-img" />
      </button>
    </li>
  )
}

export default EmojiCard
