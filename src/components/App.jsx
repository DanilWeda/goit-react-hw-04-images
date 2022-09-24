import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component {

  constructor() {
    super();

    this.state = {
      cards: [],
      search: '',
      loading: true,
      activePage: 1,
      loadMore: true
    };
  }

  handleSearch = (query) => {
    this.setState({ search: query })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({ cards: [], activePage: 1 }, () => this.fetchImage())
  }

  handleLoadMore = () => {
    this.setState({ activePage: this.state.activePage + 1 }, () => this.fetchImage())
  }

  fetchImage = async () => {
    this.setState({ loading: true, loadMore: true })
    const data = await fetch(`https://pixabay.com/api/?q=${this.state.search}&page=${this.state.activePage}&key=30121115-c667935687fc10659155cfe05&image_type=photo&orientation=horizontal&per_page=12`)
    const { hits } = await data.json()
    if (hits.length < 12 || !hits.length) this.setState({ loadMore: false })
    this.setState({ cards: [...this.state.cards, ...hits], loading: false })
  }

  componentDidUpdate(prevState) {
    if (prevState.cards !== this.state.cards) {
      const yOffset = window.pageYOffset;
      window.scroll({
        top: yOffset + 1000,
        behavior: 'smooth'
      })
    }
  }


  render() {
    const { loading, loadMore, cards } = this.state
    return (
      <div>
        <Searchbar handleClick={this.handleClick} search={this.state.search} handleSearch={this.handleSearch} />
        {!!this.state.cards.length && <ImageGallery loading={loading} loadMore={loadMore} cards={cards} handleClick={this.handleLoadMore} />}
      </div >
    )
  }
};
