import { Component } from 'react'
import classes from './Searchbar.module.css'

class Searchbar extends Component {
  render() {
    return (
      <header className={classes.Searchbar}>
        <form className={classes.SearchForm}>
          <button type="submit" className={classes.SearchForm_button}>
            <span className={classes.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={classes.SearchForm_input}
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
