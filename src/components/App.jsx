import { Component } from "react";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component {

  fetchImage = async () => {
    const data = await fetch('https://pixabay.com/api/?q=cat&page=1&key=30121115-c667935687fc10659155cfe05&image_type=photo&orientation=horizontal&per_page=12')
    // const response = aw
    console.log(await data.json())
  }

  componentDidMount() {
    this.fetchImage()
  }

  render() {
    return (
      <div>
        <Searchbar />
        {/* <Loader /> */}
        <Button />
      </div >
    )
  }
};
