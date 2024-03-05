import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoIncre = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaIncre = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">
            Bob ate <span className="fruit">{mango}</span> mangoes{' '}
            <span className="fruit">{banana}</span> bananas
          </h1>
          <div className="box">
            <div className="fit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="buton" type="button" onClick={this.mangoIncre}>
                Eat Mango
              </button>
            </div>
            <div className="fit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="buton"
                type="button"
                onClick={this.bananaIncre}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
