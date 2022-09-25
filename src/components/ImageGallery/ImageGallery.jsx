import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal'
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classes from './ImageGallery.module.css'
import Button from "components/Button/Button";


const ImageGallery = ({ cards, loadMore, loading, handleClick }) => {
  const [open, setOpen] = useState(false)
  const [imageURL, setImageURL] = useState('')


  const handleOpenImage = (largeImage) => () => {
    setOpen(true)
    setImageURL(largeImage)
  }

  const handleClose = (e) => {
    if (e.key) {
      setOpen(false)
      setImageURL('')
      return
    }

    if (e.target === e.currentTarget) {
      setOpen(false)
      setImageURL('')
    }
  }

  return (
      <>
      {open && <Modal largeImage={imageURL} onClose={handleClose} />}
        <ul className={classes.gallery}>
        {cards.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} onClick={handleOpenImage} id={id} preview={webformatURL} largeImage={largeImageURL} />)}
        </ul>
        {loading && <Loader />}
        {loadMore && (
          <div className={classes.buttonSection}>
          <Button onClick={handleClick} />
          </div>
        )}
      </>
    )
  }


ImageGallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
  })),
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.bool.isRequired
}

export default ImageGallery
