import classes from './Searchbar.module.css'
import PropTypes from 'prop-types'

const Searchbar = ({ handleSearch, handleClick, search }) => {

  const handleChange = (e) => {
    handleSearch(e.target.value)
  }

    return (
      <header className={classes.Searchbar}>
        <form className={classes.SearchForm}>
          <button onClick={handleClick} type="submit" className={classes.SearchForm_button}>
            <span className={classes.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={classes.SearchForm_input}
            value={search}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
}

Searchbar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Searchbar
