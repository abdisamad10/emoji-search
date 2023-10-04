import React, { PureComponent } from "react";
import Header from './Dashboard/Header/Header';
import Searchbar from './Dashboard/Searchbar/SearchBar';
// import EmojisResult from './Dashboard/Emojis/EmojisResult';


export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Searchbar />
        {/* <EmojisResult /> */}
      </div>
    )
  }
}