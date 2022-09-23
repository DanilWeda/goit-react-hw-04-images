import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './Modal.css'

export default class Modal extends Component {
  // static propTypes = {second: third}

  render() {
    return (
      <div class={classes.overlay}>
        <div class={classes.modal}>
          <img src="" alt="" />
        </div>
      </div>
    )
  }
}

