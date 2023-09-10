// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: ''}

  onChangeInput = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    const len = value.length

    return (
      <div className="container">
        <div>
          <h1 className="heading">
            Calculate the <br />
            letters
            <br />
            you enter
          </h1>
          <label htmlFor="label">Enter the phrase</label>
          <br />
          <input
            id="label"
            type="search"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <div>
            <button className="btn" type="button">
              No.of letters: {len}
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
