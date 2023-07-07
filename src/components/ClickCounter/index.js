/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  // eslint-disable-next-line lines-between-class-members
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log('Clicked')
  }
  // eslint-disable-next-line lines-between-class-members
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            The Button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <button className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
