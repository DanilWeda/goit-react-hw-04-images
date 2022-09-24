import { Component } from 'react'
import classes from './Button.module.css'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = { onClick: PropTypes.func }

  render() {
    return (
      <button onClick={this.props.onClick} className={classes.button}>Load more</button>
    )
  }
}
export default Button
