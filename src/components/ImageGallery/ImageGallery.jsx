import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal'
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classes from './ImageGallery.module.css'
import Button from "components/Button/Button";


export default class ImageGallery extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool.isRequired,
    loadMore: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    this.state = {
      open: false,
      imageURL: ''
    };
  }

  handleOpenImage = (largeImage) => () => {
    this.setState({ open: true, imageURL: largeImage })
  }

  handleClose = (e) => {
    if (e.key) {
      this.setState({ open: false, imageURL: '' })
      return
    }

    if (e.target === e.currentTarget)
      this.setState({ open: false, imageURL: '' })
  }

  render() {
    const { cards, loadMore, loading } = this.props

    return (
      <>
        {this.state.open && <Modal largeImage={this.state.imageURL} onClose={this.handleClose} />}
        <ul className={classes.gallery}>
          {cards.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} onClick={this.handleOpenImage} id={id} preview={webformatURL} largeImage={largeImageURL} />)}
        </ul>
        {loading && <Loader />}
        {loadMore && (
          <div className={classes.buttonSection}>
            <Button onClick={this.props.handleClick} />
          </div>
        )}
      </>
    )
  }
}

