import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {listOfCharacter: [], inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onCountCharacter = event => {
    event.preventDefault()
    const {inputText} = this.state
    const inputDetails = {
      id: v4(),
      count: `${inputText} : ${inputText.length}`,
    }

    this.setState(prevState => ({
      listOfCharacter: [...prevState.listOfCharacter, inputDetails],
      inputText: '',
    }))
  }

  render() {
    const {listOfCharacter, inputText} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="display-container">
            <div className="header">
              <h1 className="header-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <div className="image-count-container">
              {listOfCharacter.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image-resize"
                />
              ) : (
                <ul className="ul-container">
                  {listOfCharacter.map(eachCount => (
                    <li className="li-para" key={eachCount.id}>
                      <p className="li-para">{eachCount.count}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="input-container">
            <h1 className="input-heading">Character Counter</h1>
            <form
              className="input-and-button-container"
              onSubmit={this.onCountCharacter}
            >
              <input
                type="text"
                onChange={this.onChangeInput}
                className="input"
                value={inputText}
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
