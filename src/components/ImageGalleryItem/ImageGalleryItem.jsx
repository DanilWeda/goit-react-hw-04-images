import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    preview: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { preview, largeImage, onClick: openModal } = this.props
    return (
      <li className={classes.galleryItem}>
        <img onClick={openModal(largeImage)} className={classes.galleryItem_image} src={preview} alt="card" />
      </li>
    )
  }
}

