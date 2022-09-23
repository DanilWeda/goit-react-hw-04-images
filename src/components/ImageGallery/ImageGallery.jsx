import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './ImageGallery.module.css'

export default class ImageGallery extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <ul className={classes.gallery}>
      </ul>
    )
  }
}

