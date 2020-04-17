import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    let sid = this.props.id
    this.props.onGifSelected(sid);
  }

  render() {
    const src=`https://media2.giphy.com/media/${this.props.id}/200w.webp?cid=ecf05e4748d8cd64d547041537e889123875d9565d562402&rid=200w.gif`;
    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
