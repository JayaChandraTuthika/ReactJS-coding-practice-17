import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteHistoryItem} = props
  const {title, amount, type, id} = transactionDetails

  const onDelete = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="list-item">
      <p className="grid-value">{title}</p>
      <p className="grid-value">{amount}</p>
      <p className="grid-value">{type}</p>
      <button
        type="button"
        className="delete-history-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
