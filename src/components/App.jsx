import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

const App = () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setloading] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [loadMore, setloadMore] = useState(true)

  const handleSearch = (query) => {
    setSearch(query)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setActivePage(() => 1)
    fetchImage(true)
  }

  const handleLoadMore = () => {
    setActivePage(activePage + 1)
  }

  const fetchImage = async (newQuery) => {
    const page = newQuery ? 1 : activePage
    setloading(true)
    setloadMore(true)
    const data = await fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=30121115-c667935687fc10659155cfe05&image_type=photo&orientation=horizontal&per_page=12`)
    const { hits } = await data.json()
    setloading(false)
    if (hits.length < 12 || !hits.length) setloadMore(false)
    if (newQuery) {
      setCards([...hits])
      return
    }
    setCards([...cards, ...hits])
  }

  useEffect(() => {
    const yOffset = window.pageYOffset;
    window.scroll({
      top: yOffset + 1000,
      behavior: 'smooth'
    })
  }, [cards])

  useEffect(() => {
    if (activePage > 1) {
      fetchImage()
      return
    }
  }, [activePage])

    return (
      <div>
        <Searchbar handleClick={handleClick} search={search} handleSearch={handleSearch} />
        {!!cards.length && <ImageGallery loading={loading} loadMore={loadMore} cards={cards} handleClick={handleLoadMore} />}
      </div >
    )
};

export default App
