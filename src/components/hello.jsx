import React, { Component } from 'react';

export class Hello extends Component{
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked;
    });
  }

  render(){
    return(
        <div className={this.state.clicked ? "clicked" : ""} onClick={this.handleClick}> Hello, {this.props.name} </div>
      )
  }
}

