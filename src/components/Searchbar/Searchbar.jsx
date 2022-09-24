import { Component } from 'react'
import classes from './Searchbar.module.css'
import PropTypes from 'prop-types'

class Searchbar extends Component {
  static propTypes = {
    search: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    this.props.handleSearch(e.target.value)
  }

  render() {
    return (
      <header className={classes.Searchbar}>
        <form className={classes.SearchForm}>
          <button onClick={this.props.handleClick} type="submit" className={classes.SearchForm_button}>
            <span className={classes.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={classes.SearchForm_input}
            value={this.props.search}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
export default Searchbar
