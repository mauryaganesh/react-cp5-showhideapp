import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state
    const firstNameText = isFirstNameVisible ? 'Joe' : null
    const lastNameText = isLastNameVisible ? 'Jonas' : null
    const firstNameDiv = isFirstNameVisible ? 'first-name-div' : null
    const lastNameDiv = isLastNameVisible ? 'last-name-div' : null

    return (
      <div className="app-container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            <div className={firstNameDiv}>
              <p>{firstNameText}</p>
            </div>
          </div>

          <div>
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            <div className={lastNameDiv}>
              <p>{lastNameText}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
