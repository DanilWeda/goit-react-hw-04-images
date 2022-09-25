import PropTypes from 'prop-types'
import { useEffect } from 'react'
import classes from './Modal.module.css'

const Modal = ({ onClose, largeImage }) => {

  const escClose = (e) => {
    if (e.key === "Escape") {
      onClose(e)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escClose)
    return () => document.removeEventListener("keydown", escClose)
  }, [])

    return (
      <div onClick={onClose} className={classes.overlay}>
        <div className={classes.modal}>
          <img src={largeImage} alt="Large version" />
        </div>
      </div>
    )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired
}

export default Modal
