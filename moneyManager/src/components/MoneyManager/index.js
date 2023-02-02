import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    transactionTypeId: 'INCOME',
  }

  onTitleInputChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmountInputChange = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onTypeChange = event => {
    this.setState({
      transactionTypeId: event.target.value,
    })
  }

  onDeleteHistoryItem = id => {
    const {transactionsList} = this.state

    const selectedItem = transactionsList.find(each => each.id === id)
    const newHistoryList = transactionsList.filter(each => each.id !== id)

    if (selectedItem.type === 'Income') {
      this.setState(prev => ({
        income: prev.income - parseInt(selectedItem.amount),
      }))
    } else {
      this.setState(prev => ({
        expenses: prev.expenses - parseInt(selectedItem.amount),
      }))
    }
    this.setState({
      transactionsList: newHistoryList,
    })
  }

  onAddHistoryItem = event => {
    event.preventDefault()

    const {
      titleInput,
      amountInput,
      transactionTypeId,
      transactionsList,
    } = this.state

    const transaction = transactionTypeOptions.find(
      each => each.optionId === transactionTypeId,
    )

    const newHistoryItem = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: transaction.displayText,
    }

    const newHistoryList = [...transactionsList, newHistoryItem]

    if (transactionTypeId === 'INCOME') {
      this.setState(prev => ({income: prev.income + parseInt(amountInput)}))
    } else if (transactionTypeId === 'EXPENSES') {
      this.setState(prev => ({expenses: prev.expenses + parseInt(amountInput)}))
    }

    this.setState({
      transactionsList: newHistoryList,
      titleInput: '',
      amountInput: '',
      transactionTypeId: 'INCOME',
    })
  }

  render() {
    const {
      income,
      expenses,
      titleInput,
      amountInput,
      transactionTypeId,
      transactionsList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="first-container-heading">Hi, Richard</h1>
          <p className="first-container-para">
            Welcome back to your
            <span className="first-container-part-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="third-container">
          <form className="form-container" onSubmit={this.onAddHistoryItem}>
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="titleInput" className="label">
              TITLE
            </label>
            <input
              id="titleInput"
              className="input"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onTitleInputChange}
            />
            <label htmlFor="amountInput" className="label">
              AMOUNT
            </label>
            <input
              id="amountInput"
              className="input"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onAmountInputChange}
            />
            <label htmlFor="amountInput" className="label">
              TYPE
            </label>
            <select
              className="input"
              value={transactionTypeId}
              onChange={this.onTypeChange}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="inner-history-container">
              <div className="table-header">
                <p className="table-heading">Title</p>
                <p className="table-heading">Amount</p>
                <p className="table-heading">Type</p>
              </div>
              <ul className="list-container">
                {transactionsList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    onDeleteHistoryItem={this.onDeleteHistoryItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
