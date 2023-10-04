import React, { PureComponent } from "react";
import Header from './Dashboard/Header/Header';
import Searchbar from './Dashboard/Searchbar/SearchBar';
import Filter from "./Dashboard/Emojis/Filter";
import EmojisResult from './Dashboard/Emojis/EmojisResult';


export default class App extends PureComponent {

  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange = (event) => {
      this.setState({
        filteredEmojis: Filter(event.target.value, 15),
      });
  }

  render () {
    return (
      <div>
        <Header />
        <Searchbar handleChange={this.handleChange}/>
        <EmojisResult emojiData={this.state.filteredEmojis}/>
      </div>
    )
  }
}