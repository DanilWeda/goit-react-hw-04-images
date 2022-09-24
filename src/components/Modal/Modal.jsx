import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './Modal.module.css'

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.escClose = this.escClose.bind(this);
  }

  escClose = (e) => {
    if (e.key === "Escape") {
      this.props.onClose(e)
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escClose);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escClose);
  }

  render() {
    const { onClose, largeImage } = this.props
    return (
      <div onClick={onClose} className={classes.overlay}>
        <div className={classes.modal}>
          <img src={largeImage} alt="Large version" />
        </div>
      </div>
    )
  }
}

