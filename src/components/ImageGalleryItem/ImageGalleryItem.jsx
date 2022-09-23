import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './ImageGalleryItem.css'

export default class ImageGalleryItem extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <li className={classes.galleryItem}>
        <img className={classes.galleryItem_image} src="" alt="" />
      </li>
    )
  }
}

