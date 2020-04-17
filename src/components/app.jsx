import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      gifs: [],
      selectedGifId: "IdsaqVmDTsfi7d6Ls4"
    }
  }

  search = (query) =>{
    giphy("ct2M0SS7TlUE5B25wSJAqbyw2Ziy9zTz").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result)=>{
      this.setState({
        gifs: result.data
        });
    });
  }

  selectedGif = (selGif) =>{
    console.log(selGif);
    this.setState({
      selectedGifId: selGif
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList key="tempKey" gifs={this.state.gifs} onselectedfromList={this.selectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
