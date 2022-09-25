import PropTypes from 'prop-types'
import classes from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ preview, largeImage, onClick: openModal }) => {

    return (
      <li className={classes.galleryItem}>
        <img onClick={openModal(largeImage)} className={classes.galleryItem_image} src={preview} alt="card" />
      </li>
    )
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  preview: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem
